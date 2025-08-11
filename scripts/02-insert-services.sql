-- ==============================================
-- INSERTION DES SERVICES
-- ==============================================

INSERT INTO services (
    title, slug, description, short_description, category, subcategory,
    base_price, pricing_type, duration_value, duration_unit, delivery_time,
    features, technologies, key_points, requirements, deliverables,
    process_steps, portfolio_items, is_popular, difficulty_level,
    max_revisions, support_duration, image_url
) VALUES 

-- SERVICE 1: CRÉATION DE SITES WEB VITRINE
(
    'Sites Web Vitrine Professionnels',
    'sites-web-vitrine',
    'Création de sites web vitrine professionnels pour présenter votre entreprise avec élégance et efficacité. Design moderne, responsive et optimisé pour le référencement naturel.',
    'Sites web professionnels pour présenter votre entreprise avec design moderne et responsive.',
    'Développement Web',
    'Sites Vitrine',
    150000,
    'fixed',
    3,
    'weeks',
    '2-3 semaines',
    ARRAY[
        'Design responsive moderne et élégant',
        'Optimisation SEO de base incluse',
        'Formulaire de contact fonctionnel',
        'Intégration réseaux sociaux',
        'Hébergement gratuit pendant 1 an',
        'Formation à la gestion du contenu',
        'Certificat SSL inclus',
        'Sauvegarde automatique',
        'Support technique 30 jours'
    ],
    ARRAY['WordPress', 'HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    ARRAY[
        'Design unique et personnalisé',
        'Compatible tous appareils',
        'Chargement ultra-rapide',
        'Interface d''administration simple',
        'Référencement optimisé'
    ],
    ARRAY[
        'Contenu textuel et images fournis par le client',
        'Logo de l''entreprise disponible',
        'Cahier des charges défini'
    ],
    ARRAY[
        'Site web complet et fonctionnel',
        'Panneau d''administration',
        'Guide d''utilisation',
        'Fichiers sources',
        'Formation utilisateur'
    ],
    '{
        "steps": [
            {"step": 1, "title": "Analyse et Brief", "description": "Analyse des besoins et définition du cahier des charges"},
            {"step": 2, "title": "Maquettage", "description": "Création des maquettes et validation du design"},
            {"step": 3, "title": "Développement", "description": "Développement du site et intégration du contenu"},
            {"step": 4, "title": "Tests et Optimisation", "description": "Tests de fonctionnalité et optimisation des performances"},
            {"step": 5, "title": "Mise en ligne", "description": "Déploiement et formation du client"}
        ]
    }',
    '{
        "examples": [
            {"title": "Site Cabinet Médical", "description": "Site vitrine pour cabinet médical avec prise de rendez-vous"},
            {"title": "Site Restaurant", "description": "Site vitrine avec menu en ligne et réservations"},
            {"title": "Site Avocat", "description": "Site professionnel avec blog juridique intégré"}
        ]
    }',
    true,
    'beginner',
    5,
    30,
    '/placeholder.svg?height=400&width=600&text=Site+Web+Vitrine'
),

-- SERVICE 2: E-COMMERCE
(
    'Boutiques E-commerce Complètes',
    'boutiques-ecommerce',
    'Développement de boutiques en ligne complètes avec gestion des produits, commandes, paiements sécurisés et tableau de bord administrateur. Solution clé en main pour vendre en ligne.',
    'Boutiques en ligne complètes avec gestion produits, commandes et paiements sécurisés.',
    'Développement Web',
    'E-commerce',
    300000,
    'fixed',
    6,
    'weeks',
    '4-6 semaines',
    ARRAY[
        'Catalogue produits illimité',
        'Panier et processus de commande optimisé',
        'Paiements sécurisés (Stripe, PayPal, Mobile Money)',
        'Gestion avancée des stocks',
        'Tableau de bord administrateur complet',
        'Système de promotions et coupons',
        'Gestion des expéditions',
        'Rapports de ventes détaillés',
        'Formation complète à la gestion',
        'Support technique 60 jours'
    ],
    ARRAY['WooCommerce', 'WordPress', 'PHP', 'MySQL', 'JavaScript', 'Stripe API', 'PayPal API'],
    ARRAY[
        'Interface utilisateur intuitive',
        'Paiements 100% sécurisés',
        'Gestion automatisée des stocks',
        'Rapports de ventes en temps réel',
        'SEO e-commerce optimisé'
    ],
    ARRAY[
        'Catalogue produits avec descriptions et images',
        'Informations légales de l''entreprise',
        'Comptes marchands pour les paiements'
    ],
    ARRAY[
        'Boutique e-commerce complète',
        'Panneau d''administration',
        'Configuration des paiements',
        'Formation gestion boutique',
        'Documentation complète'
    ],
    '{
        "steps": [
            {"step": 1, "title": "Analyse E-commerce", "description": "Étude du marché et définition de la stratégie e-commerce"},
            {"step": 2, "title": "Architecture", "description": "Conception de l''architecture et du parcours client"},
            {"step": 3, "title": "Développement", "description": "Développement de la boutique et intégration des paiements"},
            {"step": 4, "title": "Configuration", "description": "Configuration des produits, taxes et expéditions"},
            {"step": 5, "title": "Tests et Formation", "description": "Tests complets et formation du client"}
        ]
    }',
    '{
        "examples": [
            {"title": "Boutique Mode Africaine", "description": "E-commerce de vêtements avec 500+ produits"},
            {"title": "Pharmacie en ligne", "description": "Boutique médicaments avec prescription en ligne"},
            {"title": "Électronique & High-Tech", "description": "Boutique électronique avec comparateur de prix"}
        ]
    }',
    true,
    'intermediate',
    3,
    60,
    '/placeholder.svg?height=400&width=600&text=E-commerce+Store'
),

-- SERVICE 3: APPLICATIONS MOBILES
(
    'Applications Mobiles iOS & Android',
    'applications-mobiles',
    'Développement d''applications mobiles natives et cross-platform pour iOS et Android. De l''idée au déploiement sur les stores, nous créons des apps performantes et user-friendly.',
    'Applications mobiles natives iOS/Android avec design moderne et fonctionnalités avancées.',
    'Développement Mobile',
    'Applications Natives',
    500000,
    'project',
    10,
    'weeks',
    '6-10 semaines',
    ARRAY[
        'Design natif iOS et Android',
        'Synchronisation cloud en temps réel',
        'Notifications push personnalisées',
        'Analytics d''usage intégrées',
        'Système d''authentification sécurisé',
        'Mode hors-ligne disponible',
        'Mises à jour OTA (Over The Air)',
        'Publication sur App Store et Google Play',
        'Support technique 6 mois',
        'Formation équipe technique'
    ],
    ARRAY['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS', 'Node.js'],
    ARRAY[
        'Performance native optimisée',
        'Interface utilisateur intuitive',
        'Sécurité des données garantie',
        'Scalabilité et évolutivité',
        'Compatibilité multi-plateformes'
    ],
    ARRAY[
        'Cahier des charges fonctionnel détaillé',
        'Maquettes UI/UX validées',
        'Comptes développeur Apple/Google',
        'Serveur backend si nécessaire'
    ],
    ARRAY[
        'Application mobile complète',
        'Code source documenté',
        'Guide de déploiement',
        'Documentation technique',
        'Formation maintenance'
    ],
    '{
        "steps": [
            {"step": 1, "title": "Conception UX/UI", "description": "Design de l''expérience utilisateur et interface"},
            {"step": 2, "title": "Développement MVP", "description": "Développement du produit minimum viable"},
            {"step": 3, "title": "Fonctionnalités Avancées", "description": "Intégration des fonctionnalités complexes"},
            {"step": 4, "title": "Tests et Optimisation", "description": "Tests sur différents appareils et optimisation"},
            {"step": 5, "title": "Déploiement", "description": "Publication sur les stores et formation"}
        ]
    }',
    '{
        "examples": [
            {"title": "App Livraison Restaurant", "description": "Application de commande et livraison de repas"},
            {"title": "App Fitness & Santé", "description": "Application de suivi fitness avec coach virtuel"},
            {"title": "App Éducation", "description": "Plateforme d''apprentissage mobile interactive"}
        ]
    }',
    false,
    'advanced',
    2,
    180,
    '/placeholder.svg?height=400&width=600&text=Mobile+App'
),

-- SERVICE 4: MARKETING DIGITAL - COMMUNITY MANAGEMENT
(
    'Community Management Professionnel',
    'community-management',
    'Gestion complète de vos réseaux sociaux avec création de contenu quotidien, interaction communauté, planification publications et rapports de performance détaillés.',
    'Gestion complète de vos réseaux sociaux avec contenu quotidien et engagement communauté.',
    'Marketing Digital',
    'Réseaux Sociaux',
    75000,
    'monthly',
    1,
    'months',
    'Service mensuel',
    ARRAY[
        'Création de contenu quotidien (posts, stories, reels)',
        'Gestion Facebook, Instagram, LinkedIn, TikTok',
        'Interaction et réponses aux commentaires',
        'Planification et programmation des publications',
        'Hashtags research et optimisation',
        'Veille concurrentielle mensuelle',
        'Rapport de performance mensuel détaillé',
        'Stratégie de croissance personnalisée',
        'Gestion des avis clients en ligne'
    ],
    ARRAY['Facebook Business', 'Instagram Creator Studio', 'Hootsuite', 'Canva Pro', 'Analytics Tools'],
    ARRAY[
        'Croissance organique de l''audience',
        'Engagement communautaire élevé',
        'Contenu viral et impactant',
        'Présence digitale professionnelle',
        'ROI mesurable et transparent'
    ],
    ARRAY[
        'Accès aux comptes réseaux sociaux',
        'Charte graphique de l''entreprise',
        'Calendrier des événements/promotions'
    ],
    ARRAY[
        'Contenu créé et publié quotidiennement',
        'Rapport mensuel de performance',
        'Stratégie de contenu mise à jour',
        'Base de données des visuels créés'
    ],
    '{
        "steps": [
            {"step": 1, "title": "Audit Digital", "description": "Analyse de la présence actuelle et de la concurrence"},
            {"step": 2, "title": "Stratégie Contenu", "description": "Définition de la ligne éditoriale et planning"},
            {"step": 3, "title": "Création & Publication", "description": "Production et diffusion du contenu quotidien"},
            {"step": 4, "title": "Engagement", "description": "Animation de la communauté et interactions"},
            {"step": 5, "title": "Analyse & Optimisation", "description": "Mesure des performances et ajustements"}
        ]
    }',
    '{
        "examples": [
            {"title": "Restaurant Le Délice", "description": "+400% d''engagement, +200% de followers en 6 mois"},
            {"title": "Boutique Mode", "description": "+300% de trafic web, +150% de ventes en ligne"},
            {"title": "Cabinet Dentaire", "description": "+250% de prises de rendez-vous via les réseaux"}
        ]
    }',
    true,
    'beginner',
    0,
    30,
    '/placeholder.svg?height=400&width=600&text=Community+Management'
),

-- SERVICE 5: PUBLICITÉ FACEBOOK & INSTAGRAM
(
    'Campagnes Publicitaires Facebook & Instagram',
    'publicite-facebook-instagram',
    'Création et gestion de campagnes publicitaires performantes sur Facebook et Instagram. Ciblage précis, optimisation continue et ROI maximisé pour vos objectifs business.',
    'Campagnes publicitaires Facebook/Instagram avec ciblage précis et ROI optimisé.',
    'Marketing Digital',
    'Publicité Payante',
    100000,
    'monthly',
    1,
    'months',
    'Gestion mensuelle',
    ARRAY[
        'Création des visuels publicitaires professionnels',
        'Ciblage précis de l''audience (lookalike, intérêts, comportements)',
        'A/B testing systématique des annonces',
        'Optimisation quotidienne des campagnes',
        'Suivi des conversions et ROI',
        'Retargeting des visiteurs du site',
        'Rapport hebdomadaire de performance',
        'Recommandations d''optimisation',
        'Gestion du budget publicitaire'
    ],
    ARRAY['Facebook Ads Manager', 'Instagram Ads', 'Facebook Pixel', 'Google Analytics', 'Canva Pro'],
    ARRAY[
        'ROI moyen de 300-500%',
        'Ciblage ultra-précis',
        'Coût par acquisition optimisé',
        'Augmentation du trafic qualifié',
        'Conversions mesurables'
    ],
    ARRAY[
        'Budget publicitaire minimum 50,000 FCFA/mois',
        'Site web avec tracking configuré',
        'Objectifs de campagne définis'
    ],
    ARRAY[
        'Campagnes publicitaires actives',
        'Rapports de performance hebdomadaires',
        'Recommandations d''optimisation',
        'Visuels publicitaires créés'
    ],
    '{
        "steps": [
            {"step": 1, "title": "Audit & Stratégie", "description": "Analyse de l''audience et définition de la stratégie"},
            {"step": 2, "title": "Création Campagnes", "description": "Création des campagnes et visuels publicitaires"},
            {"step": 3, "title": "Lancement & Tests", "description": "Lancement et A/B testing des annonces"},
            {"step": 4, "title": "Optimisation", "description": "Optimisation quotidienne des performances"},
            {"step": 5, "title": "Reporting", "description": "Analyse des résultats et recommandations"}
        ]
    }',
    '{
        "examples": [
            {"title": "E-commerce Mode", "description": "ROI 450%, +200% de ventes en 3 mois"},
            {"title": "Formation en ligne", "description": "Coût par lead réduit de 60%, +300% d''inscriptions"},
            {"title": "Restaurant", "description": "+180% de commandes, ROI 380%"}
        ]
    }',
    true,
    'intermediate',
    0,
    30,
    '/placeholder.svg?height=400&width=600&text=Facebook+Ads'
),

-- SERVICE 6: DESIGN & IDENTITÉ VISUELLE
(
    'Création Logo & Identité Visuelle',
    'logo-identite-visuelle',
    'Création d''identité visuelle complète avec logo professionnel, charte graphique, déclinaisons et guide d''utilisation. Design unique qui reflète parfaitement votre marque.',
    'Logo professionnel et identité visuelle complète avec charte graphique.',
    'Design Graphique',
    'Branding',
    50000,
    'fixed',
    2,
    'weeks',
    '1-2 semaines',
    ARRAY[
        'Recherche créative et concepts multiples',
        '3 propositions de logo différentes',
        'Déclinaisons couleurs (couleur, noir/blanc, monochrome)',
        'Fichiers vectoriels haute définition (AI, EPS, SVG)',
        'Fichiers raster (PNG, JPG) en plusieurs tailles',
        'Guide d''utilisation de la marque',
        'Révisions illimitées jusqu''à satisfaction',
        'Propriété intellectuelle transférée',
        'Support conseil 30 jours'
    ],
    ARRAY['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Canva Pro'],
    ARRAY[
        'Design unique et mémorable',
        'Adaptable tous supports',
        'Intemporel et professionnel',
        'Différenciation concurrentielle',
        'Impact visuel fort'
    ],
    ARRAY[
        'Brief créatif détaillé',
        'Exemples de logos appréciés',
        'Informations sur l''entreprise et ses valeurs'
    ],
    ARRAY[
        'Logo final en tous formats',
        'Charte graphique complète',
        'Guide d''utilisation',
        'Fichiers sources modifiables',
        'Déclinaisons multiples'
    ],
    '{
        "steps": [
            {"step": 1, "title": "Brief Créatif", "description": "Analyse de la marque et définition du brief créatif"},
            {"step": 2, "title": "Recherche & Concepts", "description": "Recherche créative et développement des concepts"},
            {"step": 3, "title": "Propositions", "description": "Présentation de 3 propositions de logo"},
            {"step": 4, "title": "Révisions", "description": "Ajustements selon les retours client"},
            {"step": 5, "title": "Finalisation", "description": "Livraison des fichiers finaux et guide d''usage"}
        ]
    }',
    '{
        "examples": [
            {"title": "Restaurant Africain", "description": "Logo moderne alliant tradition et modernité"},
            {"title": "Startup Tech", "description": "Identité visuelle innovante et dynamique"},
            {"title": "Cabinet Médical", "description": "Logo professionnel inspirant confiance"}
        ]
    }',
    false,
    'beginner',
    999,
    30,
    '/placeholder.svg?height=400&width=600&text=Logo+Design'
),

-- SERVICE 7: AUTOMATISATION PROCESSUS
(
    'Automatisation des Processus Métier',
    'automatisation-processus',
    'Automatisation de vos tâches répétitives et workflows avec les meilleurs outils du marché. Gagnez du temps, réduisez les erreurs et boostez votre productivité.',
    'Automatisation des tâches répétitives avec workflows intelligents et intégrations.',
    'Automatisation',
    'Processus Métier',
    150000,
    'project',
    4,
    'weeks',
    '3-4 semaines',
    ARRAY[
        'Analyse complète des processus existants',
        'Workflows automatisés sur mesure',
        'Intégration multi-outils (CRM, Email, etc.)',
        'Notifications automatiques intelligentes',
        'Rapports de performance automatisés',
        'Formation équipe complète',
        'Documentation des processus',
        'Support technique 90 jours',
        'Optimisations post-déploiement'
    ],
    ARRAY['Zapier', 'Make (Integromat)', 'Airtable', 'Notion', 'Google Workspace', 'Microsoft Power Automate'],
    ARRAY[
        'Gain de temps jusqu''à 80%',
        'Réduction des erreurs humaines',
        'Productivité équipe multipliée',
        'ROI rapide et mesurable',
        'Processus standardisés'
    ],
    ARRAY[
        'Cartographie des processus actuels',
        'Accès aux outils à intégrer',
        'Définition des objectifs d''automatisation'
    ],
    ARRAY[
        'Workflows automatisés fonctionnels',
        'Documentation des processus',
        'Formation utilisateurs',
        'Guide de maintenance',
        'Rapports de performance'
    ],
    '{
        "steps": [
            {"step": 1, "title": "Audit Processus", "description": "Analyse détaillée des processus actuels"},
            {"step": 2, "title": "Conception Workflows", "description": "Design des workflows automatisés"},
            {"step": 3, "title": "Développement", "description": "Création et configuration des automatisations"},
            {"step": 4, "title": "Tests & Validation", "description": "Tests complets et validation des processus"},
            {"step": 5, "title": "Déploiement & Formation", "description": "Mise en production et formation équipe"}
        ]
    }',
    '{
        "examples": [
            {"title": "Cabinet Comptable", "description": "90% de temps économisé sur le traitement des factures"},
            {"title": "Agence Immobilière", "description": "Automatisation complète du suivi prospects"},
            {"title": "E-commerce", "description": "Gestion automatisée des commandes et stocks"}
        ]
    }',
    false,
    'intermediate',
    3,
    90,
    '/placeholder.svg?height=400&width=600&text=Process+Automation'
),

-- SERVICE 8: COACHING LEADERSHIP DIGITAL
(
    'Coaching Leadership Digital',
    'coaching-leadership-digital',
    'Développement de vos compétences de leader à l''ère numérique. Coaching personnalisé pour maîtriser les outils digitaux et diriger efficacement dans un monde connecté.',
    'Coaching personnalisé en leadership digital et management d''équipes à distance.',
    'Coaching',
    'Leadership',
    25000,
    'hourly',
    1,
    'hours',
    'Sessions de 1h30',
    ARRAY[
        'Évaluation complète des compétences actuelles',
        'Plan de développement personnalisé sur 6 mois',
        'Techniques de leadership moderne et agile',
        'Gestion d''équipes digitales et à distance',
        'Outils de productivité et collaboration',
        'Communication digitale efficace',
        'Suivi et accompagnement continu',
        'Ressources et outils exclusifs',
        'Accès communauté de leaders'
    ],
    ARRAY['Zoom', 'Microsoft Teams', 'Slack', 'Notion', 'Calendly', 'LinkedIn'],
    ARRAY[
        'Leadership adapté au digital',
        'Équipes plus productives',
        'Communication améliorée',
        'Résultats mesurables',
        'Développement personnel accéléré'
    ],
    ARRAY[
        'Motivation et engagement personnel',
        'Expérience managériale souhaitée',
        'Disponibilité pour sessions régulières'
    ],
    ARRAY[
        'Plan de développement personnalisé',
        'Outils et ressources exclusives',
        'Suivi de progression',
        'Certificat de coaching',
        'Accès réseau professionnel'
    ],
    '{
        "steps": [
            {"step": 1, "title": "Évaluation 360°", "description": "Bilan complet des compétences et objectifs"},
            {"step": 2, "title": "Plan Personnalisé", "description": "Création du programme de développement"},
            {"step": 3, "title": "Sessions Coaching", "description": "Accompagnement régulier et exercices pratiques"},
            {"step": 4, "title": "Mise en Pratique", "description": "Application des techniques en situation réelle"},
            {"step": 5, "title": "Évaluation & Suivi", "description": "Mesure des progrès et ajustements"}
        ]
    }',
    '{
        "examples": [
            {"title": "Directrice Marketing", "description": "Promotion obtenue en 3 mois, équipe +50% plus productive"},
            {"title": "Entrepreneur Tech", "description": "Levée de fonds réussie, leadership renforcé"},
            {"title": "Manager Commercial", "description": "Équipe commerciale +200% de performance"}
        ]
    }',
    false,
    'intermediate',
    0,
    0,
    '/placeholder.svg?height=400&width=600&text=Leadership+Coaching'
);
