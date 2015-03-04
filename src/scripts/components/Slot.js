'use strict';

var React = require('react/addons');

require('../../styles/Slot.less');

var Mole = require('./Mole');
var Nothing = require('./Nothing');

var Slot = React.createClass({
  propTypes: {
    onMoleClicked: React.PropTypes.func.isRequired,
    hasMole: React.PropTypes.bool.isRequired,
    index: React.PropTypes.number.isRequired
  },
  render() {
    var cx = React.addons.classSet;
    var classes = cx({
      'Slot': true,
      'has-mole': this.props.hasMole,
      'is-hit': this.props.isHit
    });
    return (
        <div className={classes}>
          <Mole className="Mole" key={this.props.index} onClicked={this.props.onMoleClicked}/>
        </div>
      );
  }
});

module.exports = Slot;

