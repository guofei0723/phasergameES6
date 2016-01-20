
// with es6

class Booter {
    constructor (game) {

    }

    init () {

        //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;

        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.stage.disableVisibilityChange = true;

        this.stage.backgroundColor = '#103040';

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;


        if (this.game.device.desktop)
        {
            //  If you have any desktop specific settings, they can go in here
            this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        }
        else
        {
            //  Same goes for mobile settings.
            //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(270, 480, 640, 1200);
            // forcePortrait
            this.scale.forceOrientation(false, true);
            // forceLandscape
            // this.scale.forceOrientation(true);
        }
    }

    preload () {
        this.load.image('logo', 'assets/img/Phaser-Logo-Small.png');
        this.load.image('preloadBar', 'assets/img/Phaser.png');

    }

    create () {
        this.input.addPointer();

        // do something
        this.state.start('Preloader');
    }
}
