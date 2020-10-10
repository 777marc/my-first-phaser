class SceneMain extends Phaser.Scene {
    
    constructor() {
        super('SceneMain');
    }
    
    preload()
    {
    	this.load.spritesheet('boy', 'images/boy.png', { frameWidth: 120, frameHeight: 200 });
    }
    
    create() {
        this.char = this.add.sprite(0, game.config.height/2, 'boy');

        var frameNames= this.anims.generateFrameNumbers('boy');

        this.anims.create({
            key: 'walk',
            frames: frameNames,
            frameRate: 10,
            repeat: -1
        });

        this.char.play('walk');

        this.tweens.add({targets: this.char, duration: 1000, x:game.config.width});
    }

    update() {
        this.char.x++;

        if(this.char.x > game.config.width) {
            this.char.x = 0;
        }
    }
}