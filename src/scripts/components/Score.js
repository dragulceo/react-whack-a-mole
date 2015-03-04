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
          Hits: {this.props.score}
        </div>
      );
  }
});

module.exports = Score; 

