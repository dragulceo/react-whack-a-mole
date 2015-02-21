'use strict';

var React = require('react/addons');

require('../../styles/Slot.less');

var Mole = require('./Mole');
var Nothing = require('./Nothing');

var Slot = React.createClass({
  propTypes: {
    onMoleClicked: React.PropTypes.func.isRequired,
    hasMole: React.PropTypes.bool.isRequired
  },
  render() {
    var content;
    if(this.props.hasMole) {
      content =
        <Mole onClicked={this.props.onMoleClicked}/>
      ;
    } else {
      content =
        <Nothing />
    }
    return (
        <div className="Slot">
          {content}
        </div>
      );
  }
});

module.exports = Slot; 

