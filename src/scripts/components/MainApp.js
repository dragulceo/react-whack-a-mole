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
require('../../styles/main.less');

var imageURL = require('../../images/yeoman.png');

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var App = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <h1 className="elegant-shadow">React Whack A Mole</h1>
        <ReactTransitionGroup transitionName="fade">
          <div className="menu">
            <Link to="game">Game</Link>
            <Link to="about">About</Link>
          </div>
          <RouteHandler/>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = App;
