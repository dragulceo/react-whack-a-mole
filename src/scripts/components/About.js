'use strict';

var React = require('react/addons');

require('../../styles/About.less');

var About = React.createClass({
  render: function () {
    return (
	    <div className="About">
	      <p>Cool little game made with Yeoman, React Webpack</p>
	    </div>
    );
  }
});

module.exports = About; 

