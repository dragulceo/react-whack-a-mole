'use strict';

describe('About', function () {
  var React = require('react/addons');
  var About, component;

  beforeEach(function () {
    About = require('../../../src/scripts/components/About.js');
    component = React.createElement(About);
  });

  it('should create a new instance of About', function () {
    expect(component).toBeDefined();
  });
});
