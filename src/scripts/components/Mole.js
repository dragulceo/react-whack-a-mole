'use strict';

var React = require('react/addons');

require('../../styles/Mole.less');

var Mole = React.createClass({
  propTypes: {
      onClicked: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <div className="Mole" onTouchTap={this.props.onClicked}></div>
    );
  }
});

module.exports = Mole; 

