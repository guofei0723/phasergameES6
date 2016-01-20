'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// with es6

var Preloader = function () {
    function Preloader(game) {
        _classCallCheck(this, Preloader);

        this.logo = null;
        this.preloadBar = null;

        this.ready = false;
    }

    _createClass(Preloader, [{
        key: 'preload',
        value: function preload() {
            this.logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
            this.logo.anchor.setTo(0.5);

            this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY + this.logo.height / 2 + 30, 'preloadBar');
            this.preloadBar.anchor.setTo(0.5, 0);
            this.load.setPreloadSprite(this.preloadBar);

            // loading assets
            this.load.image('simon', 'assets/img/simon.png');
        }
    }, {
        key: 'create',
        value: function create() {
            this.preloadBar.cropEnabled = false;
        }
    }, {
        key: 'update',
        value: function update() {
            this.ready = true;
            this.state.start('MainMenu');
        }
    }]);

    return Preloader;
}();
