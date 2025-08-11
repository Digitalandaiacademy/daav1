-- ==============================================
-- VUES ET FONCTIONS POUR L'ADMINISTRATION
-- ==============================================

-- Vue pour le dashboard financier
CREATE OR REPLACE VIEW admin_financial_dashboard AS
SELECT 
    DATE_TRUNC('month', transaction_date) as month,
    SUM(CASE WHEN transaction_type = 'income' THEN amount ELSE 0 END) as total_income,
    SUM(CASE WHEN transaction_type = 'expense' THEN amount ELSE 0 END) as total_expenses,
    SUM(CASE WHEN transaction_type = 'income' THEN amount ELSE -amount END) as net_profit,
    COUNT(CASE WHEN transaction_type = 'income' THEN 1 END) as income_transactions,
    COUNT(CASE WHEN transaction_type = 'expense' THEN 1 END) as expense_transactions
FROM finances
GROUP BY DATE_TRUNC('month', transaction_date)
ORDER BY month DESC;

-- Vue pour les statistiques des formations
CREATE OR REPLACE VIEW admin_formations_stats AS
SELECT 
    f.id,
    f.title,
    f.slug,
    f.price,
    f.max_students,
    f.current_students,
    COUNT(e.id) as total_enrollments,
    AVG(e.progress_percentage) as avg_progress,
    SUM(oi.total_price) as total_revenue,
    f.rating,
    f.total_reviews
FROM formations f
LEFT JOIN enrollments e ON f.id = e.formation_id
LEFT JOIN order_items oi ON f.id = oi.item_id AND oi.item_type = 'formation'
WHERE f.is_active = true
GROUP BY f.id, f.title, f.slug, f.price, f.max_students, f.current_students, f.rating, f.total_reviews
ORDER BY total_revenue DESC NULLS LAST;

-- Vue pour les statistiques des services
CREATE OR REPLACE VIEW admin_services_stats AS
SELECT 
    s.id,
    s.title,
    s.slug,
    s.base_price,
    s.pricing_type,
    COUNT(sb.id) as total_bookings,
    AVG(sb.progress_percentage) as avg_progress,
    SUM(oi.total_price) as total_revenue,
    COUNT(CASE WHEN sb.status = 'completed' THEN 1 END) as completed_projects,
    COUNT(CASE WHEN sb.status = 'in_progress' THEN 1 END) as active_projects
FROM services s
LEFT JOIN service_bookings sb ON s.id = sb.service_id
LEFT JOIN order_items oi ON s.id = oi.item_id AND oi.item_type = 'service'
WHERE s.is_active = true
GROUP BY s.id, s.title, s.slug, s.base_price, s.pricing_type
ORDER BY total_revenue DESC NULLS LAST;

-- Vue pour les utilisateurs actifs
CREATE OR REPLACE VIEW admin_users_overview AS
SELECT 
    p.id,
    p.first_name,
    p.last_name,
    p.email,
    p.user_type,
    p.city,
    p.created_at,
    COUNT(o.id) as total_orders,
    SUM(o.total_amount) as total_spent,
    MAX(o.created_at) as last_order_date,
    COUNT(e.id) as active_enrollments,
    COUNT(sb.id) as active_bookings
FROM profiles p
LEFT JOIN orders o ON p.id = o.user_id
LEFT JOIN enrollments e ON p.id = e.user_id AND e.status IN ('enrolled', 'active')
LEFT JOIN service_bookings sb ON p.id = sb.user_id AND sb.status IN ('booked', 'in_progress')
GROUP BY p.id, p.first_name, p.last_name, p.email, p.user_type, p.city, p.created_at
ORDER BY total_spent DESC NULLS LAST;

-- Fonction pour obtenir les revenus par période
CREATE OR REPLACE FUNCTION get_revenue_by_period(
    period_type TEXT DEFAULT 'monthly',
    start_date DATE DEFAULT CURRENT_DATE - INTERVAL '12 months',
    end_date DATE DEFAULT CURRENT_DATE
)
RETURNS TABLE (
    period_start DATE,
    period_end DATE,
    total_revenue DECIMAL(12,2),
    formation_revenue DECIMAL(12,2),
    service_revenue DECIMAL(12,2),
    transaction_count INTEGER
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        CASE 
            WHEN period_type = 'daily' THEN f.transaction_date
            WHEN period_type = 'weekly' THEN DATE_TRUNC('week', f.transaction_date)::DATE
            WHEN period_type = 'monthly' THEN DATE_TRUNC('month', f.transaction_date)::DATE
            WHEN period_type = 'yearly' THEN DATE_TRUNC('year', f.transaction_date)::DATE
        END as period_start,
        CASE 
            WHEN period_type = 'daily' THEN f.transaction_date
            WHEN period_type = 'weekly' THEN (DATE_TRUNC('week', f.transaction_date) + INTERVAL '6 days')::DATE
            WHEN period_type = 'monthly' THEN (DATE_TRUNC('month', f.transaction_date) + INTERVAL '1 month - 1 day')::DATE
            WHEN period_type = 'yearly' THEN (DATE_TRUNC('year', f.transaction_date) + INTERVAL '1 year - 1 day')::DATE
        END as period_end,
        SUM(f.amount) as total_revenue,
        SUM(CASE WHEN f.category = 'formation_sales' THEN f.amount ELSE 0 END) as formation_revenue,
        SUM(CASE WHEN f.category = 'service_sales' THEN f.amount ELSE 0 END) as service_revenue,
        COUNT(*)::INTEGER as transaction_count
    FROM finances f
    WHERE f.transaction_type = 'income'
        AND f.transaction_date BETWEEN start_date AND end_date
    GROUP BY 
        CASE 
            WHEN period_type = 'daily' THEN f.transaction_date
            WHEN period_type = 'weekly' THEN DATE_TRUNC('week', f.transaction_date)::DATE
            WHEN period_type = 'monthly' THEN DATE_TRUNC('month', f.transaction_date)::DATE
            WHEN period_type = 'yearly' THEN DATE_TRUNC('year', f.transaction_date)::DATE
        END
    ORDER BY period_start DESC;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour obtenir les statistiques globales
CREATE OR REPLACE FUNCTION get_global_stats()
RETURNS TABLE (
    total_users INTEGER,
    total_students INTEGER,
    total_clients INTEGER,
    total_formations INTEGER,
    total_services INTEGER,
    total_orders INTEGER,
    total_revenue DECIMAL(12,2),
    monthly_revenue DECIMAL(12,2),
    active_enrollments INTEGER,
    active_bookings INTEGER,
    avg_order_value DECIMAL(12,2)
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        (SELECT COUNT(*)::INTEGER FROM profiles WHERE user_type != 'admin') as total_users,
        (SELECT COUNT(*)::INTEGER FROM profiles WHERE user_type = 'student') as total_students,
        (SELECT COUNT(*)::INTEGER FROM profiles WHERE user_type = 'client') as total_clients,
        (SELECT COUNT(*)::INTEGER FROM formations WHERE is_active = true) as total_formations,
        (SELECT COUNT(*)::INTEGER FROM services WHERE is_active = true) as total_services,
        (SELECT COUNT(*)::INTEGER FROM orders) as total_orders,
        (SELECT COALESCE(SUM(amount), 0) FROM finances WHERE transaction_type = 'income') as total_revenue,
        (SELECT COALESCE(SUM(amount), 0) FROM finances 
         WHERE transaction_type = 'income' 
         AND transaction_date >= DATE_TRUNC('month', CURRENT_DATE)) as monthly_revenue,
        (SELECT COUNT(*)::INTEGER FROM enrollments WHERE status IN ('enrolled', 'active')) as active_enrollments,
        (SELECT COUNT(*)::INTEGER FROM service_bookings WHERE status IN ('booked', 'in_progress')) as active_bookings,
        (SELECT COALESCE(AVG(total_amount), 0) FROM orders WHERE status = 'completed') as avg_order_value;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour obtenir les top clients
CREATE OR REPLACE FUNCTION get_top_clients(limit_count INTEGER DEFAULT 10)
RETURNS TABLE (
    user_id UUID,
    full_name TEXT,
    email VARCHAR(255),
    total_spent DECIMAL(12,2),
    order_count INTEGER,
    last_order_date TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        p.id as user_id,
        CONCAT(p.first_name, ' ', p.last_name) as full_name,
        p.email,
        COALESCE(SUM(o.total_amount), 0) as total_spent,
        COUNT(o.id)::INTEGER as order_count,
        MAX(o.created_at) as last_order_date
    FROM profiles p
    LEFT JOIN orders o ON p.id = o.user_id AND o.status = 'completed'
    WHERE p.user_type IN ('client', 'student')
    GROUP BY p.id, p.first_name, p.last_name, p.email
    HAVING COUNT(o.id) > 0
    ORDER BY total_spent DESC
    LIMIT limit_count;
END;
$$ LANGUAGE plpgsql;

-- Vue pour les témoignages approuvés
CREATE OR REPLACE VIEW public_testimonials AS
SELECT 
    t.id,
    t.rating,
    t.title,
    t.content,
    t.item_type,
    CASE 
        WHEN t.item_type = 'formation' THEN f.title
        WHEN t.item_type = 'service' THEN s.title
        ELSE 'Général'
    END as item_title,
    CONCAT(p.first_name, ' ', p.last_name) as client_name,
    p.profession,
    p.company,
    t.created_at
FROM testimonials t
JOIN profiles p ON t.user_id = p.id
LEFT JOIN formations f ON t.item_type = 'formation' AND t.item_id = f.id
LEFT JOIN services s ON t.item_type = 'service' AND t.item_id = s.id
WHERE t.is_approved = true AND t.is_public = true
ORDER BY t.is_featured DESC, t.created_at DESC;

-- Vue pour les commandes récentes (admin)
CREATE OR REPLACE VIEW admin_recent_orders AS
SELECT 
    o.id,
    o.order_number,
    CONCAT(p.first_name, ' ', p.last_name) as client_name,
    p.email,
    o.status,
    o.order_type,
    o.total_amount,
    o.payment_status,
    o.payment_method,
    o.created_at,
    STRING_AGG(oi.item_title, ', ') as items
FROM orders o
JOIN profiles p ON o.user_id = p.id
LEFT JOIN order_items oi ON o.id = oi.order_id
GROUP BY o.id, o.order_number, p.first_name, p.last_name, p.email, 
         o.status, o.order_type, o.total_amount, o.payment_status, o.payment_method, o.created_at
ORDER BY o.created_at DESC;

-- Fonction pour mettre à jour les statistiques des formations
CREATE OR REPLACE FUNCTION update_formation_stats()
RETURNS TRIGGER AS $$
BEGIN
    -- Mettre à jour le nombre d'étudiants actuels
    UPDATE formations 
    SET current_students = (
        SELECT COUNT(*) 
        FROM enrollments 
        WHERE formation_id = NEW.formation_id 
        AND status IN ('enrolled', 'active')
    )
    WHERE id = NEW.formation_id;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pour mettre à jour automatiquement les stats des formations
CREATE TRIGGER trigger_update_formation_stats
    AFTER INSERT OR UPDATE OR DELETE ON enrollments
    FOR EACH ROW EXECUTE FUNCTION update_formation_stats();

-- Fonction pour générer un numéro de commande unique
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS TEXT AS $$
DECLARE
    new_number TEXT;
    counter INTEGER := 1;
BEGIN
    LOOP
        new_number := 'ORD-' || TO_CHAR(CURRENT_DATE, 'YYYY') || '-' || LPAD(counter::TEXT, 3, '0');
        
        IF NOT EXISTS (SELECT 1 FROM orders WHERE order_number = new_number) THEN
            EXIT;
        END IF;
        
        counter := counter + 1;
    END LOOP;
    
    RETURN new_number;
END;
$$ LANGUAGE plpgsql;

-- Commentaires sur les tables pour la documentation
COMMENT ON TABLE profiles IS 'Table des profils utilisateurs avec types : admin, instructor, student, client';
COMMENT ON TABLE services IS 'Catalogue des services offerts par l''académie';
COMMENT ON TABLE formations IS 'Catalogue des formations avec programmes détaillés';
COMMENT ON TABLE orders IS 'Commandes des utilisateurs pour services et formations';
COMMENT ON TABLE finances IS 'Suivi financier complet : revenus et dépenses';
COMMENT ON TABLE analytics IS 'Métriques et statistiques pour le dashboard admin';
COMMENT ON VIEW admin_financial_dashboard IS 'Vue dashboard financier pour l''administration';
COMMENT ON VIEW admin_formations_stats IS 'Statistiques détaillées des formations';
COMMENT ON VIEW admin_services_stats IS 'Statistiques détaillées des services';
COMMENT ON FUNCTION get_revenue_by_period IS 'Fonction pour obtenir les revenus par période (jour/semaine/mois/année)';
COMMENT ON FUNCTION get_global_stats IS 'Fonction pour obtenir toutes les statistiques globales de l''académie';
