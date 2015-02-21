'use strict';

describe('Nothing', function () {
  var React = require('react/addons');
  var Nothing, component;

  beforeEach(function () {
    Nothing = require('../../../src/scripts/components/Nothing.js');
    component = React.createElement(Nothing);
  });

  it('should create a new instance of Nothing', function () {
    expect(component).toBeDefined();
  });
});
