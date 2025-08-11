-- ==============================================
-- INSERTION DES DONNÉES D'EXEMPLE
-- ==============================================

-- INSERTION DES PROFILS UTILISATEURS
INSERT INTO profiles (
    email, first_name, last_name, phone, city, country, profession, company,
    user_type, experience_level, interests, marketing_consent
) VALUES 
-- Admin
('joseph.obah@digitalai-academy.com', 'Joseph Chanel', 'OBAH', '+237695265626', 'Douala', 'Cameroun', 'Fondateur & CEO', 'Digital & AI Academy', 'admin', 'advanced', ARRAY['IA', 'Entrepreneuriat', 'Formation'], true),

-- Instructeurs
('marie.instructor@digitalai-academy.com', 'Marie', 'KOUAM', '+237677123456', 'Douala', 'Cameroun', 'Développeuse Web Senior', 'Digital & AI Academy', 'instructor', 'advanced', ARRAY['Développement Web', 'WordPress'], true),

-- Étudiants
('paul.student@email.com', 'Paul', 'MBARGA', '+237698765432', 'Yaoundé', 'Cameroun', 'Entrepreneur', 'StartupCM', 'student', 'beginner', ARRAY['IA', 'Marketing Digital'], true),
('fatima.client@email.com', 'Fatima', 'NKOMO', '+237677987654', 'Douala', 'Cameroun', 'Consultante Marketing', 'Freelance', 'client', 'intermediate', ARRAY['Marketing Digital', 'Design'], true),
('jean.etudiant@email.com', 'Jean', 'KAMGA', '+237699123456', 'Bafoussam', 'Cameroun', 'Étudiant', 'Université de Dschang', 'student', 'beginner', ARRAY['Développement Web', 'IA'], true),
('sophie.entrepreneur@email.com', 'Sophie', 'TCHINDA', '+237677456789', 'Douala', 'Cameroun', 'Propriétaire Boutique', 'Mode & Style', 'client', 'beginner', ARRAY['E-commerce', 'Réseaux Sociaux'], true);

-- INSERTION DES COMMANDES
INSERT INTO orders (
    order_number, user_id, status, order_type, subtotal, tax_amount, total_amount,
    payment_status, payment_method, billing_info
) VALUES 
('ORD-2024-001', (SELECT id FROM profiles WHERE email = 'paul.student@email.com'), 'completed', 'formation', 150000, 28875, 178875, 'paid', 'mobile_money', '{"name": "Paul MBARGA", "phone": "+237698765432", "city": "Yaoundé"}'),
('ORD-2024-002', (SELECT id FROM profiles WHERE email = 'fatima.client@email.com'), 'processing', 'service', 300000, 57750, 357750, 'paid', 'card', '{"name": "Fatima NKOMO", "phone": "+237677987654", "city": "Douala"}'),
('ORD-2024-003', (SELECT id FROM profiles WHERE email = 'jean.etudiant@email.com'), 'completed', 'formation', 200000, 38500, 238500, 'paid', 'bank_transfer', '{"name": "Jean KAMGA", "phone": "+237699123456", "city": "Bafoussam"}'),
('ORD-2024-004', (SELECT id FROM profiles WHERE email = 'sophie.entrepreneur@email.com'), 'confirmed', 'mixed', 225000, 43312.5, 268312.5, 'paid', 'mobile_money', '{"name": "Sophie TCHINDA", "phone": "+237677456789", "city": "Douala"}');

-- INSERTION DES DÉTAILS DE COMMANDES
INSERT INTO order_items (order_id, item_type, item_id, item_title, quantity, unit_price, total_price) VALUES 
((SELECT id FROM orders WHERE order_number = 'ORD-2024-001'), 'formation', (SELECT id FROM formations WHERE slug = 'intelligence-artificielle'), 'Formation Intelligence Artificielle', 1, 150000, 150000),
((SELECT id FROM orders WHERE order_number = 'ORD-2024-002'), 'service', (SELECT id FROM services WHERE slug = 'boutiques-ecommerce'), 'Boutique E-commerce Complète', 1, 300000, 300000),
((SELECT id FROM orders WHERE order_number = 'ORD-2024-003'), 'formation', (SELECT id FROM formations WHERE slug = 'creation-sites-web'), 'Formation Création Sites Web', 1, 200000, 200000),
((SELECT id FROM orders WHERE order_number = 'ORD-2024-004'), 'service', (SELECT id FROM services WHERE slug = 'community-management'), 'Community Management', 1, 75000, 75000),
((SELECT id FROM orders WHERE order_number = 'ORD-2024-004'), 'formation', (SELECT id FROM formations WHERE slug = 'marketing-digital'), 'Formation Marketing Digital', 1, 175000, 175000);

-- INSERTION DES INSCRIPTIONS AUX FORMATIONS
INSERT INTO enrollments (
    user_id, formation_id, order_id, status, enrollment_date, start_date, progress_percentage
) VALUES 
((SELECT id FROM profiles WHERE email = 'paul.student@email.com'), (SELECT id FROM formations WHERE slug = 'intelligence-artificielle'), (SELECT id FROM orders WHERE order_number = 'ORD-2024-001'), 'active', '2024-03-01', '2024-03-15', 65.5),
((SELECT id FROM profiles WHERE email = 'jean.etudiant@email.com'), (SELECT id FROM formations WHERE slug = 'creation-sites-web'), (SELECT id FROM orders WHERE order_number = 'ORD-2024-003'), 'active', '2024-03-20', '2024-04-01', 25.0),
((SELECT id FROM profiles WHERE email = 'sophie.entrepreneur@email.com'), (SELECT id FROM formations WHERE slug = 'marketing-digital'), (SELECT id FROM orders WHERE order_number = 'ORD-2024-004'), 'enrolled', '2024-03-10', '2024-03-22', 0.0);

-- INSERTION DES RÉSERVATIONS DE SERVICES
INSERT INTO service_bookings (
    user_id, service_id, order_id, status, booking_date, start_date, progress_percentage
) VALUES 
((SELECT id FROM profiles WHERE email = 'fatima.client@email.com'), (SELECT id FROM services WHERE slug = 'boutiques-ecommerce'), (SELECT id FROM orders WHERE order_number = 'ORD-2024-002'), 'in_progress', '2024-02-15', '2024-02-20', 75.0),
((SELECT id FROM profiles WHERE email = 'sophie.entrepreneur@email.com'), (SELECT id FROM services WHERE slug = 'community-management'), (SELECT id FROM orders WHERE order_number = 'ORD-2024-004'), 'booked', '2024-03-10', '2024-03-15', 0.0);

-- INSERTION DES PAIEMENTS
INSERT INTO payments (
    order_id, user_id, amount, payment_method, payment_provider, transaction_id, status, payment_date
) VALUES 
((SELECT id FROM orders WHERE order_number = 'ORD-2024-001'), (SELECT id FROM profiles WHERE email = 'paul.student@email.com'), 178875, 'mobile_money', 'mtn_momo', 'MTN-2024-001-789', 'completed', '2024-03-01 14:30:00'),
((SELECT id FROM orders WHERE order_number = 'ORD-2024-002'), (SELECT id FROM profiles WHERE email = 'fatima.client@email.com'), 357750, 'card', 'stripe', 'pi_2024_002_abc123', 'completed', '2024-02-15 09:15:00'),
((SELECT id FROM orders WHERE order_number = 'ORD-2024-003'), (SELECT id FROM profiles WHERE email = 'jean.etudiant@email.com'), 238500, 'bank_transfer', 'bank_transfer', 'BT-2024-003-456', 'completed', '2024-03-20 16:45:00'),
((SELECT id FROM orders WHERE order_number = 'ORD-2024-004'), (SELECT id FROM profiles WHERE email = 'sophie.entrepreneur@email.com'), 268312.5, 'mobile_money', 'orange_money', 'OM-2024-004-789', 'completed', '2024-03-10 11:20:00');

-- INSERTION DES TÉMOIGNAGES
INSERT INTO testimonials (
    user_id, item_type, item_id, rating, title, content, is_featured, is_approved, is_public
) VALUES 
((SELECT id FROM profiles WHERE email = 'paul.student@email.com'), 'formation', (SELECT id FROM formations WHERE slug = 'intelligence-artificielle'), 5, 'Formation exceptionnelle !', 'Cette formation m''a permis d''automatiser 80% de mes tâches répétitives. Un investissement rentabilisé en 2 mois !', true, true, true),
((SELECT id FROM profiles WHERE email = 'fatima.client@email.com'), 'service', (SELECT id FROM services WHERE slug = 'boutiques-ecommerce'), 5, 'Service professionnel', 'Grâce à mon site e-commerce, mes ventes ont augmenté de 300% en 6 mois ! Équipe très professionnelle.', true, true, true),
((SELECT id FROM profiles WHERE email = 'jean.etudiant@email.com'), 'formation', (SELECT id FROM formations WHERE slug = 'creation-sites-web'), 5, 'Très complète', 'Formation très complète ! J''ai pu créer mon premier site professionnel en 3 mois. Formateur excellent.', false, true, true);

-- INSERTION DES FINANCES
INSERT INTO finances (
    transaction_type, category, subcategory, amount, description, reference_id, reference_type,
    payment_method, transaction_date, fiscal_year, fiscal_month, created_by
) VALUES 
-- Revenus des formations
('income', 'formation_sales', 'Intelligence Artificielle', 150000, 'Inscription Formation IA - Paul MBARGA', (SELECT id FROM orders WHERE order_number = 'ORD-2024-001'), 'order', 'mobile_money', '2024-03-01', 2024, 3, (SELECT id FROM profiles WHERE user_type = 'admin' LIMIT 1)),
('income', 'formation_sales', 'Création Sites Web', 200000, 'Inscription Formation Web - Jean KAMGA', (SELECT id FROM orders WHERE order_number = 'ORD-2024-003'), 'order', 'bank_transfer', '2024-03-20', 2024, 3, (SELECT id FROM profiles WHERE user_type = 'admin' LIMIT 1)),
('income', 'formation_sales', 'Marketing Digital', 175000, 'Inscription Formation Marketing - Sophie TCHINDA', (SELECT id FROM orders WHERE order_number = 'ORD-2024-004'), 'order', 'mobile_money', '2024-03-10', 2024, 3, (SELECT id FROM profiles WHERE user_type = 'admin' LIMIT 1)),

-- Revenus des services
('income', 'service_sales', 'E-commerce', 300000, 'Création Boutique E-commerce - Fatima NKOMO', (SELECT id FROM orders WHERE order_number = 'ORD-2024-002'), 'order', 'card', '2024-02-15', 2024, 2, (SELECT id FROM profiles WHERE user_type = 'admin' LIMIT 1)),
('income', 'service_sales', 'Community Management', 75000, 'Community Management - Sophie TCHINDA', (SELECT id FROM orders WHERE order_number = 'ORD-2024-004'), 'order', 'mobile_money', '2024-03-10', 2024, 3, (SELECT id FROM profiles WHERE user_type = 'admin' LIMIT 1)),

-- Dépenses
('expense', 'marketing', 'Publicité Facebook', 50000, 'Campagne publicitaire Facebook Mars 2024', NULL, 'expense', 'card', '2024-03-05', 2024, 3, (SELECT id FROM profiles WHERE user_type = 'admin' LIMIT 1)),
('expense', 'operations', 'Hébergement', 25000, 'Hébergement serveurs et domaines', NULL, 'expense', 'card', '2024-03-01', 2024, 3, (SELECT id FROM profiles WHERE user_type = 'admin' LIMIT 1)),
('expense', 'operations', 'Licences logiciels', 75000, 'Licences Adobe Creative Suite et outils', NULL, 'expense', 'card', '2024-03-01', 2024, 3, (SELECT id FROM profiles WHERE user_type = 'admin' LIMIT 1));

-- INSERTION DES ANALYTICS
INSERT INTO analytics (
    metric_name, metric_value, metric_type, category, subcategory, period_type, period_start, period_end
) VALUES 
-- Métriques mensuelles Mars 2024
('total_revenue', 900000, 'amount', 'sales', 'all', 'monthly', '2024-03-01', '2024-03-31'),
('formation_sales', 525000, 'amount', 'sales', 'formations', 'monthly', '2024-03-01', '2024-03-31'),
('service_sales', 375000, 'amount', 'sales', 'services', 'monthly', '2024-03-01', '2024-03-31'),
('new_students', 3, 'count', 'users', 'students', 'monthly', '2024-03-01', '2024-03-31'),
('new_clients', 2, 'count', 'users', 'clients', 'monthly', '2024-03-01', '2024-03-31'),
('active_formations', 6, 'count', 'formations', 'active', 'monthly', '2024-03-01', '2024-03-31'),
('active_services', 8, 'count', 'services', 'active', 'monthly', '2024-03-01', '2024-03-31'),
('conversion_rate', 15.5, 'percentage', 'marketing', 'conversions', 'monthly', '2024-03-01', '2024-03-31'),

-- Métriques hebdomadaires
('website_visitors', 1250, 'count', 'marketing', 'traffic', 'weekly', '2024-03-18', '2024-03-24'),
('social_media_engagement', 8.5, 'percentage', 'marketing', 'social', 'weekly', '2024-03-18', '2024-03-24'),
('email_open_rate', 25.3, 'percentage', 'marketing', 'email', 'weekly', '2024-03-18', '2024-03-24');

-- INSERTION DES AVIS DÉTAILLÉS
INSERT INTO reviews (
    user_id, item_type, item_id, order_id, rating, title, content, pros, cons, would_recommend, is_verified, is_approved
) VALUES 
((SELECT id FROM profiles WHERE email = 'paul.student@email.com'), 'formation', (SELECT id FROM formations WHERE slug = 'intelligence-artificielle'), (SELECT id FROM orders WHERE order_number = 'ORD-2024-001'), 5, 'Excellente formation IA', 'Formation très pratique et bien structurée. Le formateur Joseph est excellent et les outils enseignés sont directement applicables.', ARRAY['Contenu très pratique', 'Formateur expert', 'Outils modernes', 'Suivi personnalisé'], ARRAY['Rythme parfois soutenu'], true, true, true),
((SELECT id FROM profiles WHERE email = 'jean.etudiant@email.com'), 'formation', (SELECT id FROM formations WHERE slug = 'creation-sites-web'), (SELECT id FROM orders WHERE order_number = 'ORD-2024-003'), 5, 'Formation web complète', 'J''ai appris énormément et créé mon premier site professionnel. Les projets pratiques sont très formateurs.', ARRAY['Très complète', 'Projets pratiques', 'Support excellent', 'Certification reconnue'], ARRAY['Durée un peu longue'], true, true, true);
