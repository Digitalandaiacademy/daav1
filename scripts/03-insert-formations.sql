-- ==============================================
-- INSERTION DES FORMATIONS
-- ==============================================

INSERT INTO formations (
    title, slug, description, short_description, category, subcategory,
    price, duration_weeks, duration_hours, level, format, max_students,
    program, learning_objectives, key_skills, prerequisites, target_audience,
    certificate_included, certificate_type, support_type, resources_included,
    tools_software, start_date, schedule, instructor_bio, is_featured,
    image_url, rating, total_reviews
) VALUES 

-- FORMATION 1: INTELLIGENCE ARTIFICIELLE
(
    'Formation Intelligence Artificielle Complète',
    'intelligence-artificielle',
    'Maîtrisez les outils d''Intelligence Artificielle pour votre activité professionnelle. Formation pratique couvrant ChatGPT, automatisation, création de contenu et intégration business. Devenez un expert IA en 8 semaines.',
    'Maîtrisez les outils IA pour votre activité professionnelle et découvrez l''automatisation intelligente.',
    'Intelligence Artificielle',
    'IA Générative',
    150000,
    8,
    40,
    'beginner',
    'hybrid',
    20,
    '{
        "modules": [
            {
                "week": 1,
                "title": "Introduction à l''IA et ses Applications",
                "content": [
                    "Histoire et évolution de l''IA",
                    "Types d''IA : IA faible vs IA forte",
                    "Applications actuelles dans différents secteurs",
                    "Opportunités et défis de l''IA en Afrique",
                    "Exercice pratique : Identification des cas d''usage"
                ],
                "duration": "5 heures"
            },
            {
                "week": 2,
                "title": "Maîtrise de ChatGPT et GPT-4",
                "content": [
                    "Comprendre le fonctionnement des LLM",
                    "Techniques de prompt engineering avancées",
                    "ChatGPT pour la rédaction professionnelle",
                    "GPT-4 pour l''analyse et la synthèse",
                    "Projet : Création d''un assistant IA personnalisé"
                ],
                "duration": "5 heures"
            },
            {
                "week": 3,
                "title": "Outils IA pour la Création de Contenu",
                "content": [
                    "Midjourney et DALL-E pour les images",
                    "Synthèse vocale avec ElevenLabs",
                    "Création vidéo avec RunwayML",
                    "Outils de design IA (Canva AI, Adobe Firefly)",
                    "Projet : Campagne marketing complète avec IA"
                ],
                "duration": "5 heures"
            },
            {
                "week": 4,
                "title": "Automatisation avec l''IA",
                "content": [
                    "Zapier et Make avec intégrations IA",
                    "Chatbots intelligents avec ChatGPT API",
                    "Automatisation des emails avec IA",
                    "Analyse automatique de données",
                    "Projet : Workflow automatisé complet"
                ],
                "duration": "5 heures"
            },
            {
                "week": 5,
                "title": "Intégration IA dans les Processus Métier",
                "content": [
                    "Audit des processus existants",
                    "Identification des opportunités d''IA",
                    "ROI et mesure de l''impact IA",
                    "Conduite du changement avec l''IA",
                    "Cas d''étude : Transformation digitale IA"
                ],
                "duration": "5 heures"
            },
            {
                "week": 6,
                "title": "Éthique et Limites de l''IA",
                "content": [
                    "Biais algorithmiques et fairness",
                    "Protection des données et RGPD",
                    "IA responsable et transparence",
                    "Limites actuelles des outils IA",
                    "Débat : L''avenir de l''IA en Afrique"
                ],
                "duration": "5 heures"
            },
            {
                "week": 7,
                "title": "Développement du Projet Final",
                "content": [
                    "Définition du projet personnel",
                    "Accompagnement individualisé",
                    "Développement et tests",
                    "Préparation de la présentation",
                    "Peer review et feedback"
                ],
                "duration": "5 heures"
            },
            {
                "week": 8,
                "title": "Présentation et Certification",
                "content": [
                    "Présentation des projets finaux",
                    "Évaluation par les pairs",
                    "Feedback du formateur",
                    "Remise des certificats",
                    "Plan de développement post-formation"
                ],
                "duration": "5 heures"
            }
        ]
    }',
    ARRAY[
        'Comprendre les fondamentaux de l''Intelligence Artificielle',
        'Maîtriser ChatGPT et les techniques de prompt engineering',
        'Utiliser les outils IA pour créer du contenu professionnel',
        'Automatiser des tâches répétitives avec l''IA',
        'Intégrer l''IA dans les processus métier existants',
        'Développer une approche éthique de l''IA',
        'Créer un projet IA complet et fonctionnel'
    ],
    ARRAY[
        'Prompt Engineering avancé',
        'Automatisation intelligente',
        'Création de contenu avec IA',
        'Intégration d''APIs IA',
        'Analyse de données avec IA',
        'Gestion de projet IA',
        'IA éthique et responsable'
    ],
    ARRAY[
        'Aucun prérequis technique spécifique',
        'Motivation et curiosité pour l''innovation',
        'Ordinateur avec connexion internet stable',
        'Niveau de français conversationnel'
    ],
    ARRAY[
        'Entrepreneurs et dirigeants d''entreprise',
        'Professionnels du marketing et communication',
        'Consultants et freelances',
        'Étudiants en fin de cycle',
        'Toute personne souhaitant se former à l''IA'
    ],
    true,
    'Certificat Professionnel en Intelligence Artificielle',
    '24/7',
    ARRAY[
        'Accès plateforme e-learning à vie',
        'Ressources téléchargeables (guides, templates)',
        'Communauté privée des alumni',
        'Mises à jour du contenu incluses',
        'Sessions de Q&A mensuelles',
        'Bibliothèque d''outils IA recommandés'
    ],
    ARRAY['ChatGPT', 'GPT-4', 'Midjourney', 'DALL-E', 'ElevenLabs', 'RunwayML', 'Zapier', 'Make'],
    '2024-03-15',
    '{
        "schedule": "Mardi et Jeudi 18h-20h30",
        "format": "2 sessions par semaine",
        "duration_per_session": "2h30",
        "online_sessions": "50%",
        "offline_sessions": "50%"
    }',
    'Expert en IA avec 15+ années d''expérience en transformation digitale. Formateur certifié et consultant pour de nombreuses entreprises africaines.',
    true,
    '/ai-training-neural-networks.png',
    4.9,
    47
),

-- FORMATION 2: CRÉATION DE SITES WEB
(
    'Formation Création de Sites Web Professionnels',
    'creation-sites-web',
    'Apprenez à créer des sites web modernes et responsives avec WordPress, HTML/CSS et JavaScript. Formation complète de 12 semaines pour devenir développeur web freelance ou créer vos propres sites.',
    'Développez des sites web modernes avec WordPress, HTML/CSS et les dernières technologies.',
    'Développement Web',
    'Front-end',
    200000,
    12,
    60,
    'beginner',
    'offline',
    25,
    '{
        "modules": [
            {
                "week": 1,
                "title": "Fondamentaux du Web et HTML5",
                "content": [
                    "Architecture du web et protocoles",
                    "Structure HTML5 sémantique",
                    "Balises essentielles et attributs",
                    "Formulaires et validation",
                    "Projet : Page web statique complète"
                ],
                "duration": "5 heures"
            },
            {
                "week": 2,
                "title": "Stylisation Avancée avec CSS3",
                "content": [
                    "Sélecteurs CSS et spécificité",
                    "Flexbox et CSS Grid",
                    "Animations et transitions",
                    "Responsive design et media queries",
                    "Projet : Site responsive multi-pages"
                ],
                "duration": "5 heures"
            },
            {
                "week": 3,
                "title": "JavaScript pour l''Interactivité",
                "content": [
                    "Syntaxe JavaScript moderne (ES6+)",
                    "Manipulation du DOM",
                    "Événements et interactions utilisateur",
                    "AJAX et fetch API",
                    "Projet : Application web interactive"
                ],
                "duration": "5 heures"
            },
            {
                "week": 4,
                "title": "Introduction à WordPress",
                "content": [
                    "Installation et configuration WordPress",
                    "Interface d''administration",
                    "Thèmes et personnalisation",
                    "Plugins essentiels",
                    "Projet : Premier site WordPress"
                ],
                "duration": "5 heures"
            },
            {
                "week": 5,
                "title": "Développement de Thèmes WordPress",
                "content": [
                    "Structure des thèmes WordPress",
                    "Template hierarchy",
                    "Custom Post Types et Fields",
                    "Hooks et filters",
                    "Projet : Thème personnalisé"
                ],
                "duration": "5 heures"
            },
            {
                "week": 6,
                "title": "Responsive Design Avancé",
                "content": [
                    "Mobile-first approach",
                    "Frameworks CSS (Bootstrap, Tailwind)",
                    "Optimisation des images",
                    "Performance et vitesse",
                    "Projet : Site ultra-responsive"
                ],
                "duration": "5 heures"
            },
            {
                "week": 7,
                "title": "Optimisation SEO Technique",
                "content": [
                    "SEO on-page et technique",
                    "Balises meta et structured data",
                    "Vitesse de chargement",
                    "Outils d''analyse SEO",
                    "Projet : Audit et optimisation SEO"
                ],
                "duration": "5 heures"
            },
            {
                "week": 8,
                "title": "Sécurité et Maintenance",
                "content": [
                    "Sécurisation des sites web",
                    "Sauvegardes automatiques",
                    "Mises à jour et maintenance",
                    "Monitoring et analytics",
                    "Projet : Plan de maintenance complet"
                ],
                "duration": "5 heures"
            },
            {
                "week": 9,
                "title": "E-commerce avec WooCommerce",
                "content": [
                    "Installation et configuration WooCommerce",
                    "Gestion des produits et stocks",
                    "Paiements et expéditions",
                    "Personnalisation boutique",
                    "Projet : Boutique e-commerce complète"
                ],
                "duration": "5 heures"
            },
            {
                "week": 10,
                "title": "Hébergement et Mise en Ligne",
                "content": [
                    "Types d''hébergement web",
                    "Noms de domaine et DNS",
                    "Déploiement et FTP",
                    "SSL et sécurité",
                    "Projet : Mise en ligne complète"
                ],
                "duration": "5 heures"
            },
            {
                "week": 11,
                "title": "Développement du Projet Final",
                "content": [
                    "Cahier des charges projet",
                    "Développement supervisé",
                    "Tests et debugging",
                    "Optimisation finale",
                    "Préparation présentation"
                ],
                "duration": "5 heures"
            },
            {
                "week": 12,
                "title": "Présentation et Freelancing",
                "content": [
                    "Présentation des projets",
                    "Portfolio professionnel",
                    "Tarification et devis",
                    "Prospection clients",
                    "Certification et remise diplômes"
                ],
                "duration": "5 heures"
            }
        ]
    }',
    ARRAY[
        'Maîtriser HTML5, CSS3 et JavaScript moderne',
        'Créer des sites WordPress professionnels',
        'Développer des sites responsive et optimisés',
        'Comprendre le SEO technique',
        'Gérer l''hébergement et la mise en ligne',
        'Créer des boutiques e-commerce avec WooCommerce',
        'Lancer une activité de développeur freelance'
    ],
    ARRAY[
        'HTML5 sémantique et accessible',
        'CSS3 avancé et responsive design',
        'JavaScript ES6+ et DOM manipulation',
        'WordPress et développement de thèmes',
        'WooCommerce et e-commerce',
        'SEO technique et optimisation',
        'Déploiement et maintenance'
    ],
    ARRAY[
        'Bases en informatique et navigation web',
        'Créativité et sens esthétique',
        'Motivation pour l''apprentissage technique',
        'Ordinateur personnel recommandé'
    ],
    ARRAY[
        'Étudiants en informatique ou design',
        'Professionnels en reconversion',
        'Entrepreneurs souhaitant créer leur site',
        'Freelances voulant ajouter le web à leurs services',
        'Toute personne passionnée par le web'
    ],
    true,
    'Certificat Professionnel en Développement Web',
    '24/7',
    ARRAY[
        'Accès serveur de développement',
        'Licences logiciels incluses',
        'Templates et ressources premium',
        'Communauté d''entraide',
        'Suivi post-formation 6 mois',
        'Aide à la recherche de premiers clients'
    ],
    ARRAY['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'WooCommerce', 'Bootstrap', 'Git', 'FileZilla'],
    '2024-04-01',
    '{
        "schedule": "Lundi, Mercredi, Vendredi 14h-19h",
        "format": "3 sessions par semaine",
        "duration_per_session": "5 heures",
        "online_sessions": "0%",
        "offline_sessions": "100%"
    }',
    'Développeur web senior avec 12+ années d''expérience. Créateur de 200+ sites web et formateur certifié WordPress.',
    true,
    '/web-development-course.png',
    4.8,
    63
),

-- FORMATION 3: MARKETING DIGITAL
(
    'Formation Marketing Digital Complète',
    'marketing-digital',
    'Maîtrisez toutes les facettes du marketing digital : stratégie, réseaux sociaux, publicité payante, SEO, email marketing et analytics. Formation intensive de 10 semaines pour devenir expert marketing digital.',
    'Stratégies publicitaires et marketing en ligne efficaces pour booster votre business digital.',
    'Marketing Digital',
    'Marketing Global',
    175000,
    10,
    50,
    'intermediate',
    'hybrid',
    18,
    '{
        "modules": [
            {
                "week": 1,
                "title": "Stratégie Marketing Digital Globale",
                "content": [
                    "Écosystème du marketing digital",
                    "Buyer personas et customer journey",
                    "Objectifs SMART et KPIs",
                    "Budget et allocation des ressources",
                    "Projet : Stratégie marketing complète"
                ],
                "duration": "5 heures"
            },
            {
                "week": 2,
                "title": "Réseaux Sociaux et Community Management",
                "content": [
                    "Stratégie de contenu multi-plateformes",
                    "Facebook, Instagram, LinkedIn, TikTok",
                    "Planification et programmation",
                    "Engagement et gestion de communauté",
                    "Projet : Calendrier éditorial 3 mois"
                ],
                "duration": "5 heures"
            },
            {
                "week": 3,
                "title": "Publicité Facebook et Instagram Ads",
                "content": [
                    "Facebook Ads Manager avancé",
                    "Ciblage et audiences personnalisées",
                    "Création d''annonces performantes",
                    "A/B testing et optimisation",
                    "Projet : Campagne publicitaire complète"
                ],
                "duration": "5 heures"
            },
            {
                "week": 4,
                "title": "Google Ads et Référencement Payant",
                "content": [
                    "Google Ads : Search, Display, Shopping",
                    "Recherche de mots-clés avancée",
                    "Quality Score et optimisation",
                    "Landing pages et conversions",
                    "Projet : Campagne Google Ads ROI+"
                ],
                "duration": "5 heures"
            },
            {
                "week": 5,
                "title": "SEO et Référencement Naturel",
                "content": [
                    "SEO technique et on-page",
                    "Recherche de mots-clés et contenu",
                    "Link building et autorité",
                    "SEO local et mobile",
                    "Projet : Audit SEO complet"
                ],
                "duration": "5 heures"
            },
            {
                "week": 6,
                "title": "Email Marketing et Automation",
                "content": [
                    "Stratégies d''email marketing",
                    "Segmentation et personnalisation",
                    "Automation et workflows",
                    "A/B testing des emails",
                    "Projet : Séquence d''emails automatisée"
                ],
                "duration": "5 heures"
            },
            {
                "week": 7,
                "title": "Analytics et Mesure de Performance",
                "content": [
                    "Google Analytics 4 avancé",
                    "Facebook Pixel et tracking",
                    "Tableaux de bord et reporting",
                    "ROI et attribution marketing",
                    "Projet : Dashboard de performance"
                ],
                "duration": "5 heures"
            },
            {
                "week": 8,
                "title": "Content Marketing et Storytelling",
                "content": [
                    "Stratégie de contenu efficace",
                    "Storytelling et narration",
                    "Formats de contenu variés",
                    "Distribution et amplification",
                    "Projet : Campagne de contenu viral"
                ],
                "duration": "5 heures"
            },
            {
                "week": 9,
                "title": "Marketing d''Influence et Partenariats",
                "content": [
                    "Identification des influenceurs",
                    "Négociation et collaboration",
                    "Campagnes d''influence ROI+",
                    "Micro vs macro influenceurs",
                    "Projet : Campagne d''influence complète"
                ],
                "duration": "5 heures"
            },
            {
                "week": 10,
                "title": "Projet Final et Certification",
                "content": [
                    "Développement stratégie marketing 360°",
                    "Présentation devant jury professionnel",
                    "Feedback et recommandations",
                    "Plan de carrière marketing digital",
                    "Remise des certificats"
                ],
                "duration": "5 heures"
            }
        ]
    }',
    ARRAY[
        'Développer une stratégie marketing digital complète',
        'Maîtriser les réseaux sociaux professionnellement',
        'Créer des campagnes publicitaires rentables',
        'Optimiser le référencement naturel et payant',
        'Mesurer et analyser les performances marketing',
        'Automatiser les processus marketing',
        'Gérer des budgets marketing efficacement'
    ],
    ARRAY[
        'Stratégie marketing digital 360°',
        'Facebook Ads et Instagram Ads',
        'Google Ads et SEA',
        'SEO et référencement naturel',
        'Email marketing et automation',
        'Analytics et mesure ROI',
        'Content marketing et storytelling'
    ],
    ARRAY[
        'Bases du marketing traditionnel appréciées',
        'Utilisation courante des réseaux sociaux',
        'Notions de base en informatique',
        'Motivation pour le digital'
    ],
    ARRAY[
        'Entrepreneurs et dirigeants PME',
        'Responsables marketing en entreprise',
        'Freelances et consultants',
        'Étudiants en marketing/communication',
        'Reconversion professionnelle vers le digital'
    ],
    true,
    'Certificat Professionnel en Marketing Digital',
    '24/7',
    ARRAY[
        'Accès outils marketing premium',
        'Templates de campagnes',
        'Communauté de marketeurs',
        'Veille marketing mensuelle',
        'Masterclass trimestrielles',
        'Certification Google et Facebook'
    ],
    ARRAY['Google Ads', 'Facebook Ads Manager', 'Google Analytics', 'Mailchimp', 'Hootsuite', 'SEMrush', 'Canva'],
    '2024-03-22',
    '{
        "schedule": "Mardi et Jeudi 18h30-21h",
        "format": "2 sessions par semaine",
        "duration_per_session": "2h30",
        "online_sessions": "60%",
        "offline_sessions": "40%"
    }',
    'Expert marketing digital avec 10+ années d''expérience. Ancien responsable marketing dans des multinationales, consultant pour 100+ entreprises.',
    true,
    '/digital-marketing-course.png',
    4.7,
    38
),

-- FORMATION 4: CONTENT CREATION
(
    'Formation Content Creation Professionnelle',
    'content-creation',
    'Apprenez à créer du contenu visuel et vidéo professionnel pour les réseaux sociaux et le marketing digital. Maîtrisez Photoshop, Canva, montage vidéo et storytelling en 6 semaines.',
    'Créez du contenu visuel et vidéo professionnel pour les réseaux sociaux et marketing digital.',
    'Création de Contenu',
    'Design & Vidéo',
    125000,
    6,
    30,
    'beginner',
    'hybrid',
    15,
    '{
        "modules": [
            {
                "week": 1,
                "title": "Fondamentaux de la Création de Contenu",
                "content": [
                    "Écosystème du content marketing",
                    "Types de contenu et formats",
                    "Stratégie de contenu efficace",
                    "Outils et équipements essentiels",
                    "Projet : Audit de contenu concurrent"
                ],
                "duration": "5 heures"
            },
            {
                "week": 2,
                "title": "Design Graphique avec Photoshop",
                "content": [
                    "Interface et outils Photoshop",
                    "Retouche photo professionnelle",
                    "Création de visuels pour réseaux sociaux",
                    "Effets et filtres créatifs",
                    "Projet : Série de posts Instagram"
                ],
                "duration": "5 heures"
            },
            {
                "week": 3,
                "title": "Canva Pro pour les Réseaux Sociaux",
                "content": [
                    "Maîtrise complète de Canva Pro",
                    "Templates et personnalisation",
                    "Animation et GIFs",
                    "Brand kit et cohérence visuelle",
                    "Projet : Identité visuelle complète"
                ],
                "duration": "5 heures"
            },
            {
                "week": 4,
                "title": "Montage Vidéo avec Premiere Pro",
                "content": [
                    "Interface et workflow Premiere",
                    "Montage et transitions",
                    "Effets visuels et sonores",
                    "Export optimisé par plateforme",
                    "Projet : Vidéo promotionnelle complète"
                ],
                "duration": "5 heures"
            },
            {
                "week": 5,
                "title": "Storytelling et Narration Visuelle",
                "content": [
                    "Techniques de storytelling",
                    "Structure narrative efficace",
                    "Émotion et engagement",
                    "Adaptation par plateforme",
                    "Projet : Campagne storytelling multi-format"
                ],
                "duration": "5 heures"
            },
            {
                "week": 6,
                "title": "Portfolio et Monétisation",
                "content": [
                    "Création de portfolio professionnel",
                    "Tarification et devis",
                    "Prospection clients",
                    "Présentation des projets finaux",
                    "Certification et networking"
                ],
                "duration": "5 heures"
            }
        ]
    }',
    ARRAY[
        'Maîtriser les outils de création graphique',
        'Créer des vidéos engageantes et professionnelles',
        'Développer un style visuel unique',
        'Comprendre le storytelling visuel',
        'Optimiser le contenu par plateforme',
        'Monétiser ses compétences créatives'
    ],
    ARRAY[
        'Adobe Photoshop avancé',
        'Canva Pro et design templates',
        'Montage vidéo Premiere Pro',
        'Storytelling et narration',
        'Optimisation multi-plateformes',
        'Portfolio professionnel'
    ],
    ARRAY[
        'Créativité et sens artistique',
        'Bases en informatique',
        'Motivation pour l''apprentissage créatif'
    ],
    ARRAY[
        'Community managers et marketeurs',
        'Entrepreneurs et freelances',
        'Étudiants en communication',
        'Créateurs de contenu débutants',
        'Professionnels en reconversion créative'
    ],
    true,
    'Certificat en Content Creation Professionnelle',
    '24/7',
    ARRAY[
        'Licences logiciels incluses',
        'Banque d''images premium',
        'Templates exclusifs',
        'Communauté de créateurs',
        'Feedback personnalisé'
    ],
    ARRAY['Adobe Photoshop', 'Adobe Premiere Pro', 'Canva Pro', 'After Effects', 'Figma'],
    '2024-04-08',
    '{
        "schedule": "Samedi 9h-14h",
        "format": "1 session intensive par semaine",
        "duration_per_session": "5 heures",
        "online_sessions": "30%",
        "offline_sessions": "70%"
    }',
    'Designer graphique et vidéaste avec 8+ années d''expérience. Créateur de contenu pour grandes marques internationales.',
    false,
    '/placeholder.svg?height=400&width=600&text=Content+Creation',
    4.6,
    29
),

-- FORMATION 5: COMMUNITY MANAGEMENT
(
    'Formation Community Management Expert',
    'community-management',
    'Devenez expert en gestion de communautés en ligne. Apprenez les stratégies d''engagement, gestion de crise, analytics sociaux et création de calendrier éditorial en 8 semaines intensives.',
    'Gérez et animez les communautés en ligne, développez l''engagement et la fidélité.',
    'Réseaux Sociaux',
    'Community Management',
    140000,
    8,
    40,
    'intermediate',
    'online',
    12,
    '{
        "modules": [
            {
                "week": 1,
                "title": "Fondamentaux du Community Management",
                "content": [
                    "Rôle et missions du community manager",
                    "Écosystème des réseaux sociaux",
                    "Psychologie des communautés en ligne",
                    "Outils indispensables du CM",
                    "Projet : Audit de communauté existante"
                ],
                "duration": "5 heures"
            },
            {
                "week": 2,
                "title": "Stratégies d''Engagement Avancées",
                "content": [
                    "Techniques d''engagement prouvées",
                    "Gamification et concours",
                    "User Generated Content (UGC)",
                    "Micro-interactions et réactivité",
                    "Projet : Stratégie d''engagement 30 jours"
                ],
                "duration": "5 heures"
            },
            {
                "week": 3,
                "title": "Création de Calendrier Éditorial",
                "content": [
                    "Planification stratégique du contenu",
                    "Formats et types de publications",
                    "Fréquence et timing optimal",
                    "Outils de planification avancés",
                    "Projet : Calendrier éditorial 3 mois"
                ],
                "duration": "5 heures"
            },
            {
                "week": 4,
                "title": "Gestion de Crise et E-réputation",
                "content": [
                    "Identification des signaux d''alerte",
                    "Protocoles de gestion de crise",
                    "Communication de crise efficace",
                    "Récupération et reconstruction",
                    "Projet : Plan de gestion de crise"
                ],
                "duration": "5 heures"
            },
            {
                "week": 5,
                "title": "Analytics et Mesure de Performance",
                "content": [
                    "KPIs essentiels du community management",
                    "Outils d''analyse avancés",
                    "Reporting et tableaux de bord",
                    "ROI du community management",
                    "Projet : Dashboard de performance"
                ],
                "duration": "5 heures"
            },
            {
                "week": 6,
                "title": "Outils de Gestion Professionnels",
                "content": [
                    "Hootsuite, Buffer, Sprout Social",
                    "Automation et chatbots",
                    "Veille et monitoring",
                    "Collaboration en équipe",
                    "Projet : Setup complet d''outils"
                ],
                "duration": "5 heures"
            },
            {
                "week": 7,
                "title": "Cas Pratiques et Simulations",
                "content": [
                    "Études de cas réels",
                    "Simulations de crises",
                    "Jeux de rôles communautaires",
                    "Feedback et amélioration",
                    "Projet : Gestion communauté réelle"
                ],
                "duration": "5 heures"
            },
            {
                "week": 8,
                "title": "Certification et Développement Carrière",
                "content": [
                    "Présentation des projets",
                    "Portfolio community manager",
                    "Recherche d''emploi et freelancing",
                    "Évolution de carrière",
                    "Certification finale"
                ],
                "duration": "5 heures"
            }
        ]
    }',
    ARRAY[
        'Maîtriser les stratégies d''engagement communautaire',
        'Gérer efficacement les crises en ligne',
        'Créer des calendriers éditoriaux performants',
        'Analyser et mesurer les performances sociales',
        'Utiliser les outils professionnels de CM',
        'Développer une e-réputation positive'
    ],
    ARRAY[
        'Stratégies d''engagement avancées',
        'Gestion de crise digitale',
        'Analytics et reporting social',
        'Outils de gestion professionnels',
        'Calendrier éditorial stratégique',
        'E-réputation et monitoring'
    ],
    ARRAY[
        'Maîtrise des réseaux sociaux personnels',
        'Sens de la communication',
        'Réactivité et disponibilité',
        'Créativité et adaptabilité'
    ],
    ARRAY[
        'Community managers débutants',
        'Responsables communication',
        'Entrepreneurs gérant leurs réseaux',
        'Freelances en marketing digital',
        'Étudiants en communication'
    ],
    true,
    'Certificat Expert en Community Management',
    '24/7',
    ARRAY[
        'Accès outils CM premium',
        'Templates de contenu',
        'Communauté de CM professionnels',
        'Veille tendances réseaux sociaux',
        'Support carrière personnalisé'
    ],
    ARRAY['Hootsuite', 'Buffer', 'Sprout Social', 'Facebook Creator Studio', 'Instagram Insights', 'Canva'],
    '2024-03-25',
    '{
        "schedule": "Lundi et Mercredi 19h-21h30",
        "format": "2 sessions par semaine",
        "duration_per_session": "2h30",
        "online_sessions": "100%",
        "offline_sessions": "0%"
    }',
    'Community manager senior avec 7+ années d''expérience. Gestionnaire de communautés pour marques internationales et startups.',
    false,
    '/placeholder.svg?height=400&width=600&text=Community+Management',
    4.8,
    22
),

-- FORMATION 6: AUTOMATISATION & PRODUCTIVITÉ
(
    'Formation Automatisation & Productivité',
    'automatisation-productivite',
    'Automatisez vos tâches répétitives et boostez votre productivité avec les outils digitaux modernes. Maîtrisez Zapier, Notion, Airtable et créez des workflows automatisés en 6 semaines.',
    'Automatisez vos tâches répétitives et boostez votre productivité avec les outils digitaux.',
    'Productivité',
    'Automatisation',
    130000,
    6,
    30,
    'intermediate',
    'online',
    10,
    '{
        "modules": [
            {
                "week": 1,
                "title": "Introduction à l''Automatisation",
                "content": [
                    "Principes de l''automatisation",
                    "Identification des tâches répétitives",
                    "ROI de l''automatisation",
                    "Écosystème des outils no-code",
                    "Projet : Audit de productivité personnelle"
                ],
                "duration": "5 heures"
            },
            {
                "week": 2,
                "title": "Zapier pour Connecter vos Applications",
                "content": [
                    "Interface et concepts Zapier",
                    "Création de Zaps simples et complexes",
                    "Triggers, actions et filtres",
                    "Gestion des erreurs et debugging",
                    "Projet : 5 automatisations business"
                ],
                "duration": "5 heures"
            },
            {
                "week": 3,
                "title": "Notion pour l''Organisation Ultime",
                "content": [
                    "Architecture et bases de données Notion",
                    "Templates et systèmes de productivité",
                    "Formules et propriétés avancées",
                    "Collaboration et partage",
                    "Projet : Système de gestion complet"
                ],
                "duration": "5 heures"
            },
            {
                "week": 4,
                "title": "Airtable comme Base de Données",
                "content": [
                    "Modélisation de données Airtable",
                    "Vues, filtres et groupements",
                    "Automatisations Airtable natives",
                    "Intégrations et API",
                    "Projet : CRM automatisé complet"
                ],
                "duration": "5 heures"
            },
            {
                "week": 5,
                "title": "Workflows Automatisés Avancés",
                "content": [
                    "Conception de workflows complexes",
                    "Intégrations multi-outils",
                    "Conditions et logique avancée",
                    "Monitoring et maintenance",
                    "Projet : Workflow business complet"
                ],
                "duration": "5 heures"
            },
            {
                "week": 6,
                "title": "Projet Final et Optimisation",
                "content": [
                    "Développement projet personnalisé",
                    "Optimisation et performance",
                    "Documentation et formation équipe",
                    "Présentation et certification",
                    "Plan de développement continu"
                ],
                "duration": "5 heures"
            }
        ]
    }',
    ARRAY[
        'Identifier et automatiser les tâches répétitives',
        'Maîtriser Zapier pour connecter les applications',
        'Organiser sa vie avec Notion',
        'Créer des bases de données avec Airtable',
        'Concevoir des workflows automatisés complexes',
        'Optimiser sa productivité personnelle et professionnelle'
    ],
    ARRAY[
        'Automatisation avec Zapier',
        'Organisation avec Notion',
        'Bases de données Airtable',
        'Workflows automatisés',
        'Intégrations multi-outils',
        'Optimisation de productivité'
    ],
    ARRAY[
        'Utilisation d''outils digitaux de base',
        'Logique et pensée systémique',
        'Motivation pour l''optimisation'
    ],
    ARRAY[
        'Entrepreneurs et freelances',
        'Assistants et gestionnaires',
        'Équipes projet et managers',
        'Consultants et coachs',
        'Toute personne voulant optimiser sa productivité'
    ],
    true,
    'Certificat en Automatisation et Productivité',
    '24/7',
    ARRAY[
        'Accès premium aux outils',
        'Templates d''automatisation',
        'Communauté de productivité',
        'Mises à jour des workflows',
        'Support technique personnalisé'
    ],
    ARRAY['Zapier', 'Notion', 'Airtable', 'Make', 'Google Workspace', 'Calendly'],
    '2024-04-15',
    '{
        "schedule": "Jeudi 18h-23h",
        "format": "1 session intensive par semaine",
        "duration_per_session": "5 heures",
        "online_sessions": "100%",
        "offline_sessions": "0%"
    }',
    'Expert en automatisation et productivité avec 6+ années d''expérience. Consultant pour optimisation des processus d''entreprise.',
    false,
    '/placeholder.svg?height=400&width=600&text=Automation+Tools',
    4.9,
    18
);
