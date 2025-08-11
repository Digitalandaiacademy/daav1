-- Supprimer les anciennes politiques RLS problématiques
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;

-- Désactiver RLS temporairement pour nettoyer
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;

-- Réactiver RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Créer des politiques RLS simples et sûres
CREATE POLICY "Enable read access for users based on user_id" ON profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Enable insert for users based on user_id" ON profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Enable update for users based on user_id" ON profiles
    FOR UPDATE USING (auth.uid() = id);

-- Créer une fonction RPC pour récupérer le profil utilisateur
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

-- Accorder les permissions nécessaires
GRANT EXECUTE ON FUNCTION get_user_profile(uuid) TO authenticated;
