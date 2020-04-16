import Phaser from 'phaser'

import IntroScene from './scenes/IntroScene'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [IntroScene],
}

export default new Phaser.Game(config)
