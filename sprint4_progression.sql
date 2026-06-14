-- Tabla para almacenar la progresión del usuario (Sprint 4)
CREATE TABLE IF NOT EXISTS public.user_profiles (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username VARCHAR(100) NOT NULL,
    xp INT NOT NULL DEFAULT 0,
    level INT NOT NULL DEFAULT 1,
    selected_title VARCHAR(100) DEFAULT 'Novato',
    unlocked_titles TEXT[] DEFAULT ARRAY['Novato']::TEXT[],
    unlocked_achievements TEXT[] DEFAULT ARRAY[]::TEXT[],
    blocks_placed INT NOT NULL DEFAULT 0,
    duels_completed INT NOT NULL DEFAULT 0,
    max_combo INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- Políticas de Seguridad
CREATE POLICY "Allow public read user profiles" ON public.user_profiles FOR SELECT USING (true);
CREATE POLICY "Allow authenticated insert user profiles" ON public.user_profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Allow authenticated update user profiles" ON public.user_profiles FOR UPDATE USING (auth.uid() = user_id);
