'use strict';

function main() {
    var game = new Phaser.Game('100%', '100%', Phaser.AUTO, 'game');
    game.state.add('Booter', Booter);
    game.state.add('Preloader', Preloader);

    game.state.start('Booter');
}

window.onload = main;
