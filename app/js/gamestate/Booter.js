'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// with es6

var Booter = function () {
    function Booter(game) {
        _classCallCheck(this, Booter);
    }

    _createClass(Booter, [{
        key: 'init',
        value: function init() {

            //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
            this.input.maxPointers = 1;

            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            this.stage.disableVisibilityChange = true;

            this.stage.backgroundColor = '#103040';

            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;

            if (this.game.device.desktop) {
                //  If you have any desktop specific settings, they can go in here
                this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
            } else {
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
    }, {
        key: 'preload',
        value: function preload() {
            this.load.image('logo', 'assets/img/Phaser-Logo-Small.png');
            this.load.image('preloadBar', 'assets/img/Phaser.png');
        }
    }, {
        key: 'create',
        value: function create() {
            this.input.addPointer();

            // do something
            this.state.start('Preloader');
        }
    }]);

    return Booter;
}();
