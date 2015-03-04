'use strict';

describe('Time', function () {
  var React = require('react/addons');
  var Time, component;

  beforeEach(function () {
    Time = require('components/Time.js');
    component = React.createElement(Time);
  });

  it('should create a new instance of Time', function () {
    expect(component).toBeDefined();
  });
});
