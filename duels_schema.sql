-- Tabla principal de Duelos Asíncronos
CREATE TABLE IF NOT EXISTS public.duels (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    creator_id UUID NOT NULL,
    creator_username VARCHAR(100) NOT NULL,
    seed VARCHAR(64) NOT NULL,
    board_dimension INT NOT NULL DEFAULT 8,
    piece_set VARCHAR(32) NOT NULL DEFAULT 'classic',
    difficulty VARCHAR(20) NOT NULL DEFAULT 'medium',
    creator_score INT NOT NULL,
    opponent_id UUID,
    opponent_username VARCHAR(100),
    opponent_score INT,
    status VARCHAR(20) DEFAULT 'pending', -- 'pending' | 'completed' | 'expired'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '48 hours')
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.duels ENABLE ROW LEVEL SECURITY;

-- Políticas de Seguridad
CREATE POLICY "Allow public read access to duels" ON public.duels
    FOR SELECT USING (true);

CREATE POLICY "Allow authenticated insert to duels" ON public.duels
    FOR INSERT WITH CHECK (auth.uid() = creator_id);

CREATE POLICY "Allow authenticated update of duels" ON public.duels
    FOR UPDATE USING (true);
