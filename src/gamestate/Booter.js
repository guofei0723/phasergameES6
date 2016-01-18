

class Booter {
    constructor (game) {

    }

    preload () {
        // set phaser settings
    }

    create () {
        // do something
        this.state.start('Preloader');
    }
}
