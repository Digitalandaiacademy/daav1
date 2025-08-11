CREATE OR REPLACE FUNCTION public.update_formation_quantity(
    p_user_id uuid,
    p_formation_id uuid,
    p_new_quantity integer
) RETURNS void AS $$
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
        RAISE EXCEPTION 'Panier non trouvé pour l''utilisateur';
    END IF;

    -- Trouver l'item dans le panier
    SELECT id INTO v_item_id 
    FROM public.order_items 
    WHERE order_id = v_order_id 
    AND item_id = p_formation_id 
    AND item_type = 'formation';

    IF v_item_id IS NULL THEN
        RAISE EXCEPTION 'Item non trouvé dans le panier';
    END IF;

    IF p_new_quantity <= 0 THEN
        -- Supprimer l'item si quantité <= 0
        DELETE FROM public.order_items WHERE id = v_item_id;
    ELSE
        -- Mettre à jour la quantité et total_price
        UPDATE public.order_items
        SET quantity = p_new_quantity,
            total_price = p_new_quantity * unit_price
        WHERE id = v_item_id;
    END IF;

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
END;
$$ LANGUAGE plpgsql;
