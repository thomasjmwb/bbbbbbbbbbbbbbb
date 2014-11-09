import Ember from 'ember';

function _everythingStandard (c) {
  return c.printings.any(function (item) {
    return this.contains(item);
  }, this);
}

export default Ember.ObjectController.extend({
  needs: ['sets'],

  classification: function () { 
    var cards = this.get('model.cards'),
        sideboard = this.get('model.sideboard'),
        standardSetNames = this.get('controllers.sets.standardSetNames');

    if (!cards.length && !sideboard.length) {
      return '';
    }

    var everyCardStandard = cards.every(_everythingStandard.bind(standardSetNames)),
        everySideboardStandard = sideboard.every(_everythingStandard.bind(standardSetNames));

    if (everyCardStandard && everySideboardStandard) {
      return 'Standard';
    } else {
      return 'Non-Standard';
    }
  }.property('controllers.sets.standardSetNames', 'model.cards.[]', 'model.sideboard.[]')
});