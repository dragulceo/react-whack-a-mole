'use strict';

describe('Slot', function () {
  var React = require('react/addons');
  var Slot, component;

  beforeEach(function () {
    Slot = require('../../../src/scripts/components/Slot.js');
    component = React.createElement(Slot);
  });

  it('should create a new instance of Slot', function () {
    expect(component).toBeDefined();
  });
});
