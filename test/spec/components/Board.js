'use strict';

describe('Board', function () {
  var React = require('react/addons');
  var Board, component;

  beforeEach(function () {
    Board = require('../../../src/scripts/components/Board.js');
    component = React.createElement(Board);
  });

  it('should create a new instance of Board', function () {
    expect(component).toBeDefined();
  });
});
