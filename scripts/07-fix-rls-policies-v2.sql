-- Script pour corriger les politiques RLS sans erreurs de doublons
-- Supprimer toutes les politiques existantes pour la table profiles
DO $$ 
DECLARE
    policy_record RECORD;
BEGIN
    -- Supprimer toutes les politiques existantes sur la table profiles
    FOR policy_record IN 
        SELECT policyname 
        FROM pg_policies 
        WHERE tablename = 'profiles' AND schemaname = 'public'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON profiles', policy_record.policyname);
    END LOOP;
END $$;

-- Désactiver RLS temporairement
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;

-- Réactiver RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Créer les nouvelles politiques RLS
CREATE POLICY "profiles_select_policy" ON profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "profiles_insert_policy" ON profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles_update_policy" ON profiles
    FOR UPDATE USING (auth.uid() = id);

-- Politique pour les admins (optionnelle)
CREATE POLICY "profiles_admin_policy" ON profiles
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() 
            AND user_type = 'admin'
        )
    );

-- Supprimer la fonction existante si elle existe
DROP FUNCTION IF EXISTS get_user_profile(uuid);

-- Créer la fonction RPC pour récupérer le profil utilisateur
CREATE OR REPLACE FUNCTION get_user_profile(user_id uuid)
RETURNS TABLE (
    id uuid,
    email varchar(255),
    first_name varchar(100),
    last_name varchar(100),
    phone varchar(20),
    city varchar(100),
    country varchar(100),
    profession varchar(150),
    company varchar(150),
    user_type varchar(20),
    status varchar(20),
    experience_level varchar(20),
    date_of_birth date,
    interests text[],
    bio text,
    avatar_url text,
    marketing_consent boolean,
    created_at timestamptz,
    updated_at timestamptz
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        p.id,
        p.email,
        p.first_name,
        p.last_name,
        p.phone,
        p.city,
        p.country,
        p.profession,
        p.company,
        p.user_type,
        p.status,
        p.experience_level,
        p.date_of_birth,
        p.interests,
        p.bio,
        p.avatar_url,
        p.marketing_consent,
        p.created_at,
        p.updated_at
    FROM profiles p
    WHERE p.id = user_id;
END;
$$;

-- Accorder les permissions
GRANT EXECUTE ON FUNCTION get_user_profile(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION get_user_profile(uuid) TO anon;
