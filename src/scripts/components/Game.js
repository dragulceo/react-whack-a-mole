'use strict';

var React = require('react/addons');
var ReactStateMagicMixin = require('alt/mixins/ReactStateMagicMixin');

require('../../styles/Game.less');

var Score = require('./Score');
var Time = require('./Time');
var Board = require('./Board');
var GameStore = require('../stores/game');
var GameActions = require('../actions/game');

var Game = React.createClass({
    mixins: [ReactStateMagicMixin],
    statics: {
        registerStore: GameStore
    },

	onMoleClicked() {
		GameActions.hit();
    },
	startGameClicked() {
		GameActions.start();
	},
	stopGameClicked() {
		GameActions.stop();
	},
	_onChange() {
		this.setState(GameStore.getState());
	},
	render() {
		return (
      <div>
        <div className="scoreboard">
          <Score score={this.state.score}/>
          <Time time={this.state.timeLeft}/>
        </div>
        <div className="actions">
          <button onClick={this.startGameClicked}>Start</button>
          <button onClick={this.stopGameClicked}>Stop</button>
        </div>
        <Board length="10" onMoleClicked={this.onMoleClicked} slots={this.state.slots}/>
      </div>
		);
	}
});

module.exports = Game;

