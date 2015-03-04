'use strict';

var React = require('react/addons');

require('../../styles/Time.less');

var Time = React.createClass({
  propTypes: {
    time: React.PropTypes.number.isRequired
  },
  render: function () {
    return (
      <div className="Time">
        <p>Timeleft: {this.props.time}</p>
      </div>
      );
  }
});

module.exports = Time; 

