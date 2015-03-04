'use strict';

var React = require('react/addons');

require('../../styles/Game.less');

var Score = require('./Score');
var Time = require('./Time');
var Board = require('./Board');
var GameStore = require('../stores/game');
var GameActions = require('../actions/game');

var Game = React.createClass({
	onMoleClicked() {
		GameActions.hit();
  },
	getInitialState() {
		return GameStore.getState();
	},
	componentDidMount() {
		GameStore.listen(this._onChange);
	},
	componentWillUnmount() {
		GameStore.unlisten(this._onChange);
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
        <Score score={this.state.score}/>
        <Time time={this.state.timeLeft}/>
        <button onClick={this.startGameClicked}>Start</button>
        <button onClick={this.stopGameClicked}>Stop</button>
				<Board length="10" onMoleClicked={this.onMoleClicked} slots={this.state.slots}/>
			</div>
		);
	}
});

module.exports = Game;

