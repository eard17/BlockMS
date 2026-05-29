export interface SkinColor { hsl: string; hex: number; }
export interface Skin {
  id: string;
  name: string;
  colors: SkinColor[];
  starCost: number;
}

export const SKINS_CATALOG: Skin[] = [
  {
    id: 'default',
    name: 'Clásico',
    starCost: 0,
    colors: [
      { hsl: 'hsl(190, 80%, 65%)', hex: 0x4DC6EF },
      { hsl: 'hsl(270, 75%, 75%)', hex: 0xB380EF },
      { hsl: 'hsl(330, 80%, 75%)', hex: 0xEF80B0 },
      { hsl: 'hsl(150, 70%, 65%)', hex: 0x5CD99E },
      { hsl: 'hsl(45, 90%, 65%)',  hex: 0xF5C542 },
    ],
  },
  {
    id: 'sunset',
    name: 'Atardecer',
    starCost: 5,
    colors: [
      { hsl: 'hsl(20, 90%, 65%)',  hex: 0xF58A42 },
      { hsl: 'hsl(0, 80%, 65%)',   hex: 0xEF5252 },
      { hsl: 'hsl(45, 90%, 65%)',  hex: 0xF5C542 },
      { hsl: 'hsl(320, 80%, 70%)', hex: 0xE870C0 },
      { hsl: 'hsl(280, 75%, 70%)', hex: 0xB070E0 },
    ],
  },
  {
    id: 'ocean',
    name: 'Océano',
    starCost: 5,
    colors: [
      { hsl: 'hsl(200, 85%, 60%)', hex: 0x29AAEB },
      { hsl: 'hsl(180, 80%, 55%)', hex: 0x24D9D9 },
      { hsl: 'hsl(210, 75%, 65%)', hex: 0x5B9FE8 },
      { hsl: 'hsl(165, 70%, 60%)', hex: 0x42D9B0 },
      { hsl: 'hsl(230, 70%, 70%)', hex: 0x7070E8 },
    ],
  },
  {
    id: 'forest',
    name: 'Bosque',
    starCost: 8,
    colors: [
      { hsl: 'hsl(130, 65%, 50%)', hex: 0x39C255 },
      { hsl: 'hsl(90, 60%, 55%)',  hex: 0x82C235 },
      { hsl: 'hsl(160, 65%, 50%)', hex: 0x35C28C },
      { hsl: 'hsl(45, 75%, 55%)',  hex: 0xD4A027 },
      { hsl: 'hsl(30, 80%, 50%)',  hex: 0xCC6B1A },
    ],
  },
  {
    id: 'candy',
    name: 'Candy',
    starCost: 10,
    colors: [
      { hsl: 'hsl(340, 90%, 75%)', hex: 0xF070A8 },
      { hsl: 'hsl(280, 85%, 80%)', hex: 0xC880F0 },
      { hsl: 'hsl(190, 85%, 75%)', hex: 0x60D8F5 },
      { hsl: 'hsl(50, 95%, 70%)',  hex: 0xF5D03A },
      { hsl: 'hsl(110, 75%, 70%)', hex: 0x78E060 },
    ],
  },
];
