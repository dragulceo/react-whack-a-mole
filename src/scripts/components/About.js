'use strict';

var React = require('react/addons');

require('../../styles/About.less');

var About = React.createClass({
  render: function () {
    return (
	    <div className="About">
	      <p>Cool little game made with Yeoman, React Webpack <a href="https://github.com/dragulceo/react-whack-a-mole">Github</a></p>
	    </div>
    );
  }
});

module.exports = About; 

