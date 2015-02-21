'use strict';

var React = require('react/addons');

require('../../styles/Score.less');

var Score = React.createClass({
  propTypes: {
    score: React.PropTypes.number.isRequired
  },
  render() {
    return (
        <div className="Score">
          <p>Hits: {this.props.score}</p>
        </div>
      );
  }
});

module.exports = Score; 

