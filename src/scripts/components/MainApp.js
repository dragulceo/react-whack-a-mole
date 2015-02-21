'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var imageURL = require('../../images/yeoman.png');


var App = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <Link to="game">Game</Link>
          <Link to="about">About</Link>
          <RouteHandler/>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = App;
