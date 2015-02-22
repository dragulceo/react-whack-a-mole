var MainApp = require('./MainApp');
var About = require('./About');
var Game = require('./Game');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route name="app" path="/" handler={MainApp}>
    <Route name="about" path="/about" handler={About}/>
    <Route name="game" path="/game" handler={Game}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  "use strict";
  React.render(<Handler/>, content);
});
