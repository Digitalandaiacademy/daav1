-- Create RPC function to update service quantity in cart
CREATE OR REPLACE FUNCTION public.update_service_quantity(
    p_user_id uuid,
    p_service_id uuid,
    p_new_quantity integer
) RETURNS void AS $$
DECLARE
    v_order_id uuid;
    v_service services%ROWTYPE;
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

-- Create RPC function to remove service from cart
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

-- Grant necessary permissions
GRANT EXECUTE ON FUNCTION public.update_service_quantity(uuid, uuid, integer) TO authenticated;
GRANT EXECUTE ON FUNCTION public.remove_service_from_cart(uuid, uuid) TO authenticated;
