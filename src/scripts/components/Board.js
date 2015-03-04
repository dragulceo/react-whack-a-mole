'use strict';

var React = require('react/addons');
require('../../styles/Board.less');

var Slot = require('./Slot');

var Board = React.createClass({
  propTypes: {
    onMoleClicked: React.PropTypes.func.isRequired,
    slots: React.PropTypes.array.isRequired
  },
  render() {
      var board = this.props.slots.map(function (slot) {
        return (
          <Slot key={slot.index} index={slot.index} onMoleClicked={this.props.onMoleClicked} hasMole={slot.hasMole} />
        );
      }.bind(this));
    return (
        <div className="Board">
         {board}
        </div>
      );
  }
});

module.exports = Board;

