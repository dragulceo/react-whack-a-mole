'use strict';

var React = require('react/addons');

require('../../styles/Slot.less');

var Mole = require('./Mole');
var Nothing = require('./Nothing');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Slot = React.createClass({
  propTypes: {
    onMoleClicked: React.PropTypes.func.isRequired,
    hasMole: React.PropTypes.bool.isRequired,
    index: React.PropTypes.number.isRequired
  },
  render() {
    var content;
    if(this.props.hasMole) {
      content = (
        <Mole className="Mole" key={this.props.index} onClicked={this.props.onMoleClicked}/>
      );
    } else {
      content = '';
    }
    return (
        <div className="Slot">
        <ReactCSSTransitionGroup transitionName="mole-trans">
          {content}
        </ReactCSSTransitionGroup>
        </div>
      );
  }
});

module.exports = Slot;

