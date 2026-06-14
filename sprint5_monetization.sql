-- Soportar la monetización ética agregando columnas al perfil del usuario
ALTER TABLE public.user_profiles 
ADD COLUMN IF NOT EXISTS stars INT NOT NULL DEFAULT 0,
ADD COLUMN IF NOT EXISTS unlocked_skins TEXT[] DEFAULT ARRAY['default']::TEXT[],
ADD COLUMN IF NOT EXISTS ads_removed BOOLEAN NOT NULL DEFAULT FALSE;
