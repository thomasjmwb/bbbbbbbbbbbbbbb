import Ember from 'ember';

var basicLands = ['Plains', 'Island', 'Swamp', 'Mountain', 'Forest', 'Snow-Covered Plains',
  'Snow-Covered Island', 'Snow-Covered Swamp', 'Snow-Covered Mountain', 'Snow-Covered Forest'];
export default Ember.ObjectController.extend({
  needs: ['deck'],

  canAddToDeck: function () {
    var cardsInDeck = this.get('controllers.deck.cards'),
        cardsInSideboard = this.get('controllers.deck.sideboard'),
        currentCardName = this.get('model.name');

    if (basicLands.contains(currentCardName)) {
      return true;
    }

    return cardsInDeck.filterBy('name', currentCardName).length +
           cardsInSideboard.filterBy('name', currentCardName).length < 4;
  }.property('controllers.deck.cards.@each', 'controllers.deck.sideboard.@each'),

  cannotAddToDeck: Ember.computed.not('canAddToDeck'),

  canRemoveFromMainDeck: function () {
    var currentCardName = this.get('model.name');

    return this.get('controllers.deck.cards').filterBy('name', currentCardName).length;
  }.property('controllers.deck.cards.@each'),

  cannotRemoveFromMainDeck: Ember.computed.not('canRemoveFromMainDeck'),

  canRemoveFromSideDeck: function () {
    var currentCardName = this.get('model.name');

    return this.get('controllers.deck.sideboard').filterBy('name', currentCardName).length;    
  }.property('controllers.deck.sideboard.@each'),

  cannotRemoveFromSideDeck: Ember.computed.not('canRemoveFromSideDeck'),

  cannotRemoveFromAnyDeck: Ember.computed.and('cannotRemoveFromMainDeck', 'cannotRemoveFromSideDeck')
});