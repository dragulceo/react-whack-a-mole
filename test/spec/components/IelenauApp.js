'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var IelenauApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    IelenauApp = require('components/IelenauApp.js');
    component = React.createElement(IelenauApp);
  });

  it('should create a new instance of IelenauApp', function () {
    expect(component).toBeDefined();
  });
});
