'use strict';

describe('Mole', function () {
  var React = require('react/addons');
  var Mole, component;

  beforeEach(function () {
    Mole = require('../../../src/scripts/components/Mole.js');
    component = React.createElement(Mole);
  });

  it('should create a new instance of Mole', function () {
    expect(component).toBeDefined();
  });
});
