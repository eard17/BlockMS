import Phaser from 'phaser';
import { GameScene } from './scenes/game.scene';
import { GameStateService } from '../app/services/game-state';
import { PhaserGameConfig, setGameContext } from './game-context';

export type { PhaserGameConfig };

export function createPhaserGame(
  container: HTMLElement,
  gameState: GameStateService,
  config: PhaserGameConfig,
): Phaser.Game {
  // Store in module context so GameScene.create() can read them without race
  setGameContext(gameState, config);

  const w = container.clientWidth  || window.innerWidth;
  const h = container.clientHeight || window.innerHeight;

  const phaserConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: container,
    width:  w,
    height: h,
    backgroundColor: '#0d1117',
    scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    // Disable default DOM input handling so touch flows to canvas
    input: { activePointers: 3 },
    scene: new GameScene(),
  };

  return new Phaser.Game(phaserConfig);
}
