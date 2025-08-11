CREATE OR REPLACE FUNCTION public.add_service_to_cart(
    p_user_id uuid,
    p_service_id uuid,
    p_client_name text,
    p_company_name text,
    p_email text,
    p_phone text,
    p_country text,
    p_city text,
    p_business_domain text
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
        SET quantity = quantity + 1,
            total_price = (quantity + 1) * v_service.base_price
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
            1,
            v_service.base_price,
            v_service.base_price,
            'service'
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
