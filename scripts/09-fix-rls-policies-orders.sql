-- Script pour corriger les politiques RLS sur la table orders
-- et permettre aux utilisateurs authentifiés de créer des commandes

-- 1. Supprimer les anciennes politiques RLS sur orders
DROP POLICY IF EXISTS "Users can view own orders" ON public.orders;
DROP POLICY IF EXISTS "Users can create own orders" ON public.orders;
DROP POLICY IF EXISTS "Users can update own orders" ON public.orders;

-- 2. Créer de nouvelles politiques RLS pour orders
-- Politique pour permettre aux utilisateurs authentifiés de voir leurs propres commandes
CREATE POLICY "Users can view own orders" ON public.orders
    FOR SELECT
    USING (auth.uid() = user_id);

-- Politique pour permettre aux utilisateurs authentifiés de créer leurs propres commandes
CREATE POLICY "Users can create own orders" ON public.orders
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Politique pour permettre aux utilisateurs authentifiés de mettre à jour leurs propres commandes
CREATE POLICY "Users can update own orders" ON public.orders
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- 3. Politiques RLS pour order_items
DROP POLICY IF EXISTS "Users can view own order items" ON public.order_items;
DROP POLICY IF EXISTS "Users can create own order items" ON public.order_items;
DROP POLICY IF EXISTS "Users can update own order items" ON public.order_items;

-- Politique pour voir les items de ses propres commandes
CREATE POLICY "Users can view own order items" ON public.order_items
    FOR SELECT
    USING (
        order_id IN (
            SELECT id FROM public.orders WHERE user_id = auth.uid()
        )
    );

-- Politique pour créer des items dans ses propres commandes
CREATE POLICY "Users can create own order items" ON public.order_items
    FOR INSERT
    WITH CHECK (
        order_id IN (
            SELECT id FROM public.orders WHERE user_id = auth.uid()
        )
    );

-- Politique pour mettre à jour les items de ses propres commandes
CREATE POLICY "Users can update own order items" ON public.order_items
    FOR UPDATE
    USING (
        order_id IN (
            SELECT id FROM public.orders WHERE user_id = auth.uid()
        )
    )
    WITH CHECK (
        order_id IN (
            SELECT id FROM public.orders WHERE user_id = auth.uid()
        )
    );

-- 4. Politiques RLS pour profiles
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can create own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;

-- Politique pour voir son propre profil
CREATE POLICY "Users can view own profile" ON public.profiles
    FOR SELECT
    USING (auth.uid() = id);

-- Politique pour créer son propre profil
CREATE POLICY "Users can create own profile" ON public.profiles
    FOR INSERT
    WITH CHECK (auth.uid() = id);

-- Politique pour mettre à jour son propre profil
CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

-- 5. Activer RLS sur toutes les tables concernées
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 6. S'assurer que les fonctions ont les bonnes permissions
GRANT EXECUTE ON FUNCTION public.add_formation_to_cart(uuid, uuid, integer) TO authenticated;
GRANT EXECUTE ON FUNCTION public.remove_formation_from_cart(uuid, uuid) TO authenticated;

-- 7. Permissions sur les tables
GRANT SELECT, INSERT, UPDATE ON public.orders TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.order_items TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT ON public.formations TO authenticated;

-- 8. Test de la configuration
-- Pour tester, exécuter :
-- SELECT * FROM public.formations WHERE slug = 'intelligence-artificielle';
-- SELECT public.add_formation_to_cart('user-uuid', 'formation-uuid', 1);
