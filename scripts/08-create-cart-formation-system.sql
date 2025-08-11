-- Script SQL pour intégrer les formations dans le système de panier et paiement
-- Ce script ajoute les fonctionnalités nécessaires pour que les formations soient ajoutées au panier et payées via le système existant

-- 1. Ajouter une colonne pour distinguer les types d'items dans le panier
ALTER TABLE public.order_items 
ADD COLUMN IF NOT EXISTS item_category character varying DEFAULT 'service' 
CHECK (item_category IN ('service', 'formation'));

-- 2. Mettre à jour la table orders pour supporter les formations
ALTER TABLE public.orders 
ADD COLUMN IF NOT EXISTS order_category character varying DEFAULT 'service' 
CHECK (order_category IN ('service', 'formation', 'mixed'));

-- 3. Créer une vue pour faciliter la gestion des formations dans les commandes
CREATE OR REPLACE VIEW public.formation_orders AS
SELECT 
    o.id as order_id,
    o.order_number,
    o.user_id,
    p.first_name || ' ' || p.last_name as user_name,
    o.status,
    o.payment_status,
    o.total_amount,
    o.created_at,
    f.id as formation_id,
    f.title as formation_title,
    f.price as formation_price,
    oi.quantity,
    oi.total_price as line_total
FROM public.orders o
JOIN public.order_items oi ON o.id = oi.order_id
JOIN public.formations f ON oi.item_id = f.id AND oi.item_type = 'formation'
JOIN public.profiles p ON o.user_id = p.id
WHERE oi.item_type = 'formation';

-- 4. Créer une fonction pour ajouter une formation au panier
CREATE OR REPLACE FUNCTION public.add_formation_to_cart(
    p_user_id uuid,
    p_formation_id uuid,
    p_quantity integer DEFAULT 1
) RETURNS uuid AS $$
DECLARE
    v_order_id uuid;
    v_formation formations%ROWTYPE;
    v_existing_item order_items%ROWTYPE;
BEGIN
    -- Récupérer les infos de la formation
    SELECT * INTO v_formation FROM public.formations WHERE id = p_formation_id;
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Formation non trouvée';
    END IF;
    
    -- Vérifier si l'utilisateur a déjà un panier actif (pending)
    SELECT id INTO v_order_id 
    FROM public.orders 
    WHERE user_id = p_user_id 
    AND status = 'pending' 
    AND (order_category = 'formation' OR order_category = 'mixed')
    LIMIT 1;
    
    -- Si pas de panier actif, en créer un nouveau
    IF v_order_id IS NULL THEN
        INSERT INTO public.orders (
            order_number,
            user_id,
            order_type,
            order_category,
            subtotal,
            total_amount
        ) VALUES (
            'ORD-' || to_char(now(), 'YYYYMMDD') || '-' || substr(md5(random()::text), 1, 8),
            p_user_id,
            'formation',
            'formation',
            0,
            0
        ) RETURNING id INTO v_order_id;
    END IF;
    
    -- Vérifier si la formation existe déjà dans le panier
    SELECT * INTO v_existing_item 
    FROM public.order_items 
    WHERE order_id = v_order_id 
    AND item_id = p_formation_id 
    AND item_type = 'formation';
    
    -- Si la formation existe, mettre à jour la quantité
    IF FOUND THEN
        UPDATE public.order_items 
        SET quantity = quantity + p_quantity,
            total_price = (quantity + p_quantity) * v_formation.price
        WHERE id = v_existing_item.id;
    ELSE
        -- Sinon, ajouter la formation au panier
        INSERT INTO public.order_items (
            order_id,
            item_type,
            item_id,
            item_title,
            quantity,
            unit_price,
            total_price,
            item_category
        ) VALUES (
            v_order_id,
            'formation',
            p_formation_id,
            v_formation.title,
            p_quantity,
            v_formation.price,
            p_quantity * v_formation.price,
            'formation'
        );
    END IF;
    
    -- Mettre à jour le total de la commande
    UPDATE public.orders 
    SET subtotal = (
        SELECT SUM(total_price) 
        FROM public.order_items 
        WHERE order_id = v_order_id
    ),
    total_amount = (
        SELECT SUM(total_price) 
        FROM public.order_items 
        WHERE order_id = v_order_id
    )
    WHERE id = v_order_id;
    
    RETURN v_order_id;
END;
$$ LANGUAGE plpgsql;

-- 5. Créer une fonction pour retirer une formation du panier
CREATE OR REPLACE FUNCTION public.remove_formation_from_cart(
    p_user_id uuid,
    p_formation_id uuid
) RETURNS boolean AS $$
DECLARE
    v_order_id uuid;
    v_item_id uuid;
BEGIN
    -- Trouver le panier actif de l'utilisateur
    SELECT id INTO v_order_id 
    FROM public.orders 
    WHERE user_id = p_user_id 
    AND status = 'pending' 
    AND (order_category = 'formation' OR order_category = 'mixed')
    LIMIT 1;
    
    IF v_order_id IS NULL THEN
        RETURN false;
    END IF;
    
    -- Trouver l'item dans le panier
    SELECT id INTO v_item_id 
    FROM public.order_items 
    WHERE order_id = v_order_id 
    AND item_id = p_formation_id 
    AND item_type = 'formation';
    
    IF v_item_id IS NULL THEN
        RETURN false;
    END IF;
    
    -- Supprimer l'item
    DELETE FROM public.order_items WHERE id = v_item_id;
    
    -- Mettre à jour le total de la commande
    UPDATE public.orders 
    SET subtotal = COALESCE((
        SELECT SUM(total_price) 
        FROM public.order_items 
        WHERE order_id = v_order_id
    ), 0),
    total_amount = COALESCE((
        SELECT SUM(total_price) 
        FROM public.order_items 
        WHERE order_id = v_order_id
    ), 0)
    WHERE id = v_order_id;
    
    -- Si le panier est vide, le supprimer
    DELETE FROM public.orders 
    WHERE id = v_order_id 
    AND NOT EXISTS (
        SELECT 1 FROM public.order_items WHERE order_id = v_order_id
    );
    
    RETURN true;
END;
$$ LANGUAGE plpgsql;

-- 6. Créer des indexes pour optimiser les performances
CREATE INDEX IF NOT EXISTS idx_order_items_formation ON public.order_items(item_type, item_id) WHERE item_type = 'formation';
CREATE INDEX IF NOT EXISTS idx_orders_user_formation ON public.orders(user_id, order_category) WHERE order_category IN ('formation', 'mixed');
CREATE INDEX IF NOT EXISTS idx_orders_status_formation ON public.orders(status, order_category) WHERE order_category IN ('formation', 'mixed');

-- 7. Ajouter des contraintes de validation
ALTER TABLE public.order_items 
ADD CONSTRAINT check_formation_item 
CHECK (item_type = 'formation' AND item_id IN (SELECT id FROM public.formations));

-- 8. Créer une vue pour les statistiques des formations
CREATE OR REPLACE VIEW public.formation_analytics AS
SELECT 
    f.id as formation_id,
    f.title,
    f.price,
    COUNT(DISTINCT o.id) as total_orders,
    COUNT(DISTINCT o.user_id) as unique_customers,
    SUM(CASE WHEN o.payment_status = 'paid' THEN o.total_amount ELSE 0 END) as total_revenue,
    AVG(CASE WHEN o.payment_status = 'paid' THEN o.total_amount ELSE NULL END) as avg_order_value,
    MAX(o.created_at) as last_order_date
FROM public.formations f
LEFT JOIN public.order_items oi ON f.id = oi.item_id AND oi.item_type = 'formation'
LEFT JOIN public.orders o ON oi.order_id = o.id
WHERE f.is_active = true
GROUP BY f.id, f.title, f.price;

-- 9. Script de test pour vérifier l'intégration
-- Pour tester l'ajout d'une formation au panier :
-- SELECT public.add_formation_to_cart('user-uuid-here', 'formation-uuid-here', 1);

-- Pour tester la suppression d'une formation du panier :
-- SELECT public.remove_formation_from_cart('user-uuid-here', 'formation-uuid-here');

-- Pour voir les formations dans le panier d'un utilisateur :
-- SELECT * FROM public.formation_orders WHERE user_id = 'user-uuid-here';

-- 10. Instructions d'utilisation
-- 1. Lorsqu'un utilisateur clique sur "Ajouter au panier" pour une formation, 
--    utilisez la fonction add_formation_to_cart(user_id, formation_id)
-- 2. L'utilisateur peut voir ses formations dans le panier via la vue formation_orders
-- 3. Le paiement se fait via le système orders/payments existant
-- 4. Après le paiement, créez une entrée dans enrollments pour l'inscription
