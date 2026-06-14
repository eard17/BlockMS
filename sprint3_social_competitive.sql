-- Tabla para registrar puntuaciones del Reto Diario
CREATE TABLE IF NOT EXISTS public.daily_challenge_scores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    username VARCHAR(100) NOT NULL,
    score INT NOT NULL,
    seed VARCHAR(64) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT unique_user_daily UNIQUE (user_id, seed)
);

-- Tabla para almacenar el estado del ranking de Ligas Semanales
CREATE TABLE IF NOT EXISTS public.weekly_leagues (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    username VARCHAR(100) NOT NULL,
    league_tier VARCHAR(20) NOT NULL DEFAULT 'bronze', -- 'bronze' | 'silver' | 'gold' | 'diamond'
    league_points INT NOT NULL DEFAULT 0,
    week_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT date_trunc('week', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT unique_user_weekly UNIQUE (user_id, week_start)
);

-- Habilitar RLS en ambas tablas
ALTER TABLE public.daily_challenge_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.weekly_leagues ENABLE ROW LEVEL SECURITY;

-- Políticas de Seguridad
CREATE POLICY "Allow public read daily challenge scores" ON public.daily_challenge_scores FOR SELECT USING (true);
CREATE POLICY "Allow authenticated insert daily challenge scores" ON public.daily_challenge_scores FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow public read weekly leagues" ON public.weekly_leagues FOR SELECT USING (true);
CREATE POLICY "Allow authenticated upsert weekly leagues" ON public.weekly_leagues FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Allow authenticated update weekly leagues" ON public.weekly_leagues FOR UPDATE USING (true);
