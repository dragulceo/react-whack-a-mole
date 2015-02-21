'use strict';

describe('Score', function () {
  var React = require('react/addons');
  var Score, component;

  beforeEach(function () {
    Score = require('../../../src/scripts/components/Score.js');
    component = React.createElement(Score);
  });

  it('should create a new instance of Score', function () {
    expect(component).toBeDefined();
  });
});
