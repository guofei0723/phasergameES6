
// with es6

class Preloader {
    constructor (game) {
        this.logo = null;
        this.preloadBar = null;

        this.ready = false;
    }

    preload () {
        this.logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
        this.logo.anchor.setTo(0.5);

        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY + this.logo.height / 2 + 30, 'preloadBar');
        this.preloadBar.anchor.setTo(0.5, 0);
        this.load.setPreloadSprite(this.preloadBar);

        // loading assets
        this.load.image('simon', 'assets/img/simon.png');
    }

    create () {
        this.preloadBar.cropEnabled = false;
    }

    update () {
        this.ready = true;
        this.state.start('MainMenu');
    }
}
