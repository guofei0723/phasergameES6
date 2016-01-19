'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// with es6

var Booter = function () {
    function Booter(game) {
        _classCallCheck(this, Booter);
    }

    _createClass(Booter, [{
        key: 'preload',
        value: function preload() {
            // set phaser settings
        }
    }, {
        key: 'create',
        value: function create() {
            // do something
            this.state.start('Preloader');
        }
    }]);

    return Booter;
}();
