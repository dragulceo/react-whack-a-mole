'use strict';

var React = require('react/addons');

require('../../styles/Mole.less');

var Mole = React.createClass({
  propTypes: {
      onClicked: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <div className="Mole" onClick={this.props.onClicked}>Hit me!</div>
    );
  }
});

module.exports = Mole; 

