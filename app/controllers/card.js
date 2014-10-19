import Ember from 'ember';

var basicLands = ['Plains', 'Island', 'Swamp', 'Mountain', 'Forest', 'Snow-Covered Plains',
  'Snow-Covered Island', 'Snow-Covered Swamp', 'Snow-Covered Mountain', 'Snow-Covered Forest'];
export default Ember.ObjectController.extend({
  needs: ['deck'],

  canAddToDeck: function () {
    var cardsInDeck = this.get('controllers.deck.cards'),
        currentCardName = this.get('model.name');

    if (basicLands.contains(currentCardName)) {
      return true;
    }

    return cardsInDeck.filterBy('name', currentCardName).length < 4;
  }.property('controllers.deck.cards.@each'),

  cannotAddToDeck: Ember.computed.not('canAddToDeck')
});