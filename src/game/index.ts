import Phaser from 'phaser';
import { GameScene } from './scenes/game.scene';
import { GameStateService } from '../app/services/game-state';

export interface PhaserGameConfig {
  boardDimension?: number;
  pieceSet?: string;
  seed?: string;
  activeSkin?: string;
  smilingFacesEnabled?: boolean;
  musicVolume?: number;
  sfxVolume?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export function createPhaserGame(
  container: HTMLElement,
  gameState: GameStateService,
  config: PhaserGameConfig,
): Phaser.Game {
  const scene = new GameScene();

  const phaserConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: container,
    width: container.clientWidth || window.innerWidth,
    height: container.clientHeight || window.innerHeight,
    backgroundColor: '#0d1117',
    scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: scene,
  };

  const game = new Phaser.Game(phaserConfig);

  // Inject gameState + config into scene via init data
  game.scene.start('GameScene', { gameState, config });

  return game;
}
