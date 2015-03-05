var MainApp = require('./MainApp');
var About = require('./About');
var Game = require('./Game');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var content = document.getElementById('content');

var Routes = (
  <Route name="game" path="/" handler={MainApp}>
    <DefaultRoute handler={Game}/>
    <Route name="about" path="/about" handler={About}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  "use strict";
  React.render(<Handler/>, content);
});
