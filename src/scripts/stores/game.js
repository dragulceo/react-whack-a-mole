var GameConstants = require('../constants/game');

var alt = require('../modules/alt');
var GameActions = require('../actions/game');

var TICK_MILLISECONDS = 100;
var SECOND_IN_MILLISECONDS = 1000;
var TICKS_FOR_ANIMATION = SECOND_IN_MILLISECONDS / TICK_MILLISECONDS;
var TICKS_FOR_TOGGLE = 20;

class GameStore {
    constructor() {
        this.bindActions(GameActions);
        this.score = 0;
        this.pieces = 9;
        this.startTime = null;
        this.gameDuration = 10 * SECOND_IN_MILLISECONDS;
        this.timeLeft = 0;
        this.timerId = -1;
        this.stopTimerId = -1;
        this.slots = null;
        this.gameStatus = GameConstants.STATUS_ENDED;
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
                this.slots[i].ticks = Math.max(Math.floor(Math.random() * TICKS_FOR_TOGGLE), TICKS_FOR_ANIMATION);
                this.slots[i].hasMole = !this.slots[i].hasMole;
            } else {
                this.slots[i].ticks--;
            }
        }
    }
    gameActive() {
        return (this.gameStatus === GameConstants.STATUS_STARTED);
    }
    updateTime() {
        this.timeLeft = Math.round((this.gameDuration - (+(new Date()) - this.startTime))/SECOND_IN_MILLISECONDS);
    }
    onStart() {
        if(!this.gameActive()) {
            this.gameStatus = GameConstants.STATUS_STARTED;
            this.startTime = new Date();
            this.score = 0;
            this.stopTimerId = setTimeout(function () {
                GameActions.stop();
            }.bind(this), this.gameDuration);
            this.onTick();
        } else {
            this.onStop();
        }
    }
    onStop() {
        clearInterval(this.timerId);
        clearInterval(this.stopTimerId);
        this.gameStatus = GameConstants.STATUS_ENDED;
        this.updateTime();

    }
    onHit() {
        if(this.gameActive()) {
            this.score += 1;
        }
    }
    onTick() {
        this._updateSlots();
        this.updateTime();
        this.timerId = setTimeout(function () {
            GameActions.tick();
        }.bind(this), TICK_MILLISECONDS);
    }
}
module.exports = alt.createStore(GameStore, 'GameStore');