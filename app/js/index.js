'use strict';

// with es6
function main() {
    var game = new Phaser.Game('100%', '100%', Phaser.AUTO);
    game.state.add('Booter', Booter);
    game.state.add('Preloader', Preloader);
    game.state.add('MainMenu', MainMenu);
    game.state.add('Game', Game);

    game.state.start('Booter');
}

window.onload = main;
