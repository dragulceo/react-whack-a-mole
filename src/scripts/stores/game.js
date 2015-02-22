var GameConstants = require('../constants/game');

var alt = require('../modules/alt');
var GameActions = require('../actions/game');

var TICK_MILLISECONDS = 100;
var SECOND_IN_MILLISECONDS = 1000;
var TICKS_FOR_ANIMATION = 1 * SECOND_IN_MILLISECONDS / TICK_MILLISECONDS;
var TICKS_FOR_TOGGLE = 20;

class GameStore {
    constructor() {
        this.bindActions(GameActions);
        this.score = 0;
        this.pieces = 9;
        this.rowPieces = 3;
        this.startTime = null;
        this.gameDuration = 10 * SECOND_IN_MILLISECONDS;
        this.timerId = -1;
        this.slots = null;
        this._initSlots();
    }
    _initSlots() {
        var i;
        this.slots = [];
        for(i = 0; i < this.pieces; i++) {
            this.slots.push({
                index: i,
                ticks: 0,
                hasMole: false
            });
        }
    }
    _updateSlots() {
        var i;
        for(i = 0; i < this.pieces; i++) {
            if(this.slots[i].ticks <= 0) {
                this.slots[i].ticks = TICKS_FOR_ANIMATION + Math.floor(Math.random() * TICKS_FOR_TOGGLE);
                this.slots[i].hasMole = !this.slots[i].hasMole;
            } else {
                this.slots[i].ticks--;
            }
        }
    }
    onStart() {
        this.startTime = new Date();
        if(this.gameStatus !== GameConstants.STATUS_STARTED) {
            this.gameStatus = GameConstants.STATUS_STARTED;
            this.onTick();
        } else {
            this.onStop();
        }
    }
    onStop() {
        this.gameStatus = GameConstants.STATUS_ENDED;
        clearInterval(this.timerId);
    }
    onHit() {
        this.score += 1;
    }
    onTick() {
        this._updateSlots();
        this.timerId = setTimeout(function () {
            GameActions.tick();
        }.bind(this), TICK_MILLISECONDS);
    }
}
module.exports = alt.createStore(GameStore, 'GameStore');