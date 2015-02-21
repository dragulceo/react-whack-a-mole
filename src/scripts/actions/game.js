
var alt = require('../modules/alt');

class GameActions {
  constructor() {
    this.generateActions(
      'hit',
      'start',
      'stop'
    );
  }
}

module.exports = alt.createActions(GameActions);