var GameConstants = require('../constants/game');

var alt = require('../modules/alt');
var GameActions = require('../actions/game');

class GameStore {
    constructor() {
        this.bindActions(GameActions);
        this.score = 0;
        this.pieces = 9;
        this.rowPieces = 3;
        this.startTime = null;
        this.gameDuration = 10 * 1000;
        this.timerId = -1;
        this.slots = null;
        this.initSlots();
    }
    initSlots() {
        var i;
        this.slots = [];
        for(i = 0; i < this.pieces; i++) {
            this.slots.push({
                hasMole: Math.random() > 0.5
            });
        }
    }
    onStart() {
        this.startTime = new Date();
        if(this.gameStatus != GameConstants.STATUS_STARTED) {
            this.gameStatus = GameConstants.STATUS_STARTED;
            this.onTick();
            /*this.timerId = setTimeout(function () {
             self.onGameEnd();
             }, this.gameDuration);*/
        } else {
            console.error('Game already started');
        }
    }
    onStop() {
        this.gameStatus = GameConstants.STATUS_ENDED;
        clearInterval(this.timerId);
    }
    onHit() {
        this.score += 1;
    }
    getScore() {
        return this.score;
    }
    onTick() {
        console.log('ontick');
        this.timerId = setTimeout(function () {
            this.onTick();
        }.bind(this), 1000);
    }
    onRun() {
        console.log('ontick');
    }
}
module.exports = alt.createStore(GameStore, 'GameStore');