-- Complete fix for cart service operations
-- This script creates the missing RPC functions for services

-- 1. Update service quantity function
CREATE OR REPLACE FUNCTION public.update_service_quantity(
    p_user_id uuid,
    p_service_id uuid,
    p_new_quantity integer
) RETURNS void AS $$
DECLARE
    v_order_id uuid;
    v_service services%ROWTYPE;
    v_item_exists boolean;
BEGIN
    -- Get the pending order for this user
    SELECT id INTO v_order_id 
    FROM public.orders 
    WHERE user_id = p_user_id 
    AND status = 'pending' 
    AND (order_category = 'service' OR order_category = 'mixed')
    LIMIT 1;
    
    IF v_order_id IS NULL THEN
        RAISE EXCEPTION 'Aucun panier actif trouvé';
    END IF;
    
    -- Get service details
    SELECT * INTO v_service FROM public.services WHERE id = p_service_id;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Service non trouvé';
    END IF;
    
    -- Check if item exists
    SELECT EXISTS(
        SELECT 1 FROM public.order_items 
        WHERE order_id = v_order_id 
        AND item_id = p_service_id 
        AND item_type = 'service'
    ) INTO v_item_exists;
    
    IF NOT v_item_exists THEN
        RAISE EXCEPTION 'Service non trouvé dans le panier';
    END IF;
    
    -- Update or remove the service
    IF p_new_quantity <= 0 THEN
        -- Remove the service from cart
        DELETE FROM public.order_items 
        WHERE order_id = v_order_id 
        AND item_id = p_service_id 
        AND item_type = 'service';
    ELSE
        -- Update the quantity
        UPDATE public.order_items 
        SET quantity = p_new_quantity,
            total_price = p_new_quantity * v_service.base_price
        WHERE order_id = v_order_id 
        AND item_id = p_service_id 
        AND item_type = 'service';
    END IF;
    
    -- Update order totals
    UPDATE public.orders 
    SET subtotal = (
        SELECT COALESCE(SUM(total_price), 0) 
        FROM public.order_items 
        WHERE order_id = v_order_id
    ),
    total_amount = (
        SELECT COALESCE(SUM(total_price), 0) 
        FROM public.order_items 
        WHERE order_id = v_order_id
    )
    WHERE id = v_order_id;
END;
$$ LANGUAGE plpgsql;

-- 2. Remove service from cart function
CREATE OR REPLACE FUNCTION public.remove_service_from_cart(
    p_user_id uuid,
    p_service_id uuid
) RETURNS void AS $$
DECLARE
    v_order_id uuid;
BEGIN
    -- Get the pending order for this user
    SELECT id INTO v_order_id 
    FROM public.orders 
    WHERE user_id = p_user_id 
    AND status = 'pending' 
    AND (order_category = 'service' OR order_category = 'mixed')
    LIMIT 1;
    
    IF v_order_id IS NULL THEN
        RAISE EXCEPTION 'Aucun panier actif trouvé';
    END IF;
    
    -- Remove the service from cart
    DELETE FROM public.order_items 
    WHERE order_id = v_order_id 
    AND item_id = p_service_id 
    AND item_type = 'service';
    
    -- Update order totals
    UPDATE public.orders 
    SET subtotal = (
        SELECT COALESCE(SUM(total_price), 0) 
        FROM public.order_items 
        WHERE order_id = v_order_id
    ),
    total_amount = (
        SELECT COALESCE(SUM(total_price), 0) 
        FROM public.order_items 
        WHERE order_id = v_order_id
    )
    WHERE id = v_order_id;
END;
$$ LANGUAGE plpgsql;

-- 3. Add service to cart function (if missing)
CREATE OR REPLACE FUNCTION public.add_service_to_cart(
    p_user_id uuid,
    p_service_id uuid,
    p_quantity integer DEFAULT 1
) RETURNS uuid AS $$
DECLARE
    v_order_id uuid;
    v_service services%ROWTYPE;
    v_existing_item order_items%ROWTYPE;
BEGIN
    -- Vérifier que le service existe
    SELECT * INTO v_service FROM public.services WHERE id = p_service_id;
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Service non trouvé';
    END IF;
    
    -- Vérifier si l'utilisateur a déjà un panier actif (pending)
    SELECT id INTO v_order_id 
    FROM public.orders 
    WHERE user_id = p_user_id 
    AND status = 'pending' 
    AND (order_category = 'service' OR order_category = 'mixed')
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
            'service',
            'service',
            0,
            0
        ) RETURNING id INTO v_order_id;
    END IF;
    
    -- Vérifier si le service existe déjà dans le panier
    SELECT * INTO v_existing_item 
    FROM public.order_items 
    WHERE order_id = v_order_id 
    AND item_id = p_service_id 
    AND item_type = 'service';
    
    -- Si le service existe, incrémenter la quantité
    IF FOUND THEN
        UPDATE public.order_items 
        SET quantity = quantity + p_quantity,
            total_price = (quantity + p_quantity) * v_service.base_price
        WHERE id = v_existing_item.id;
    ELSE
        -- Sinon, ajouter le service au panier
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
            'service',
            p_service_id,
            v_service.title,
            p_quantity,
            v_service.base_price,
            p_quantity * v_service.base_price,
            'service'
        );
    END IF;
    
    -- Mettre à jour le total de la commande
    UPDATE public.orders 
    SET subtotal = (
        SELECT COALESCE(SUM(total_price), 0) 
        FROM public.order_items 
        WHERE order_id = v_order_id
    ),
    total_amount = (
        SELECT COALESCE(SUM(total_price), 0) 
        FROM public.order_items 
        WHERE order_id = v_order_id
    )
    WHERE id = v_order_id;
    
    RETURN v_order_id;
END;
$$ LANGUAGE plpgsql;

-- Grant permissions
GRANT EXECUTE ON FUNCTION public.update_service_quantity(uuid, uuid, integer) TO authenticated;
GRANT EXECUTE ON FUNCTION public.remove_service_from_cart(uuid, uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.add_service_to_cart(uuid, uuid, integer) TO authenticated;
