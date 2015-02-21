'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var MainApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    MainApp = require('../../../src/scripts/components/MainApp.js');
    component = React.createElement(MainApp);
  });

  it('should create a new instance of MainApp', function () {
    expect(component).toBeDefined();
  });
});
