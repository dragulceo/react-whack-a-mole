'use strict';

describe('Game', function () {
  var React = require('react/addons');
  var Game, component;

  beforeEach(function () {
    Game = require('../../../src/scripts/components/Game.js');
    component = React.createElement(Game);
  });

  it('should create a new instance of Game', function () {
    expect(component).toBeDefined();
  });
});
