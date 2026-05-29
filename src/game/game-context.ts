import { GameStateService } from '../app/services/game-state';
import { SavedGameState } from '../app/services/save-progress';

export interface PhaserGameConfig {
  boardDimension?: number;
  pieceSet?: string;
  seed?: string;
  activeSkin?: string;
  smilingFacesEnabled?: boolean;
  musicVolume?: number;
  sfxVolume?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  savedState?: SavedGameState;
}

// Module-level singleton — avoids Phaser scene init() timing race
export let ctxGameState: GameStateService | null = null;
export let ctxConfig: PhaserGameConfig = {};

export function setGameContext(gs: GameStateService, cfg: PhaserGameConfig): void {
  ctxGameState = gs;
  ctxConfig = cfg;
}
