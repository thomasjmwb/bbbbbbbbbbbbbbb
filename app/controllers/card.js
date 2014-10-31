import Ember from 'ember';

var basicLands = ['Plains', 'Island', 'Swamp', 'Mountain', 'Forest', 'Snow-Covered Plains',
  'Snow-Covered Island', 'Snow-Covered Swamp', 'Snow-Covered Mountain', 'Snow-Covered Forest'];
export default Ember.ObjectController.extend({
  needs: ['deck'],

  /** @property {Boolean} - can this card be added to the main deck being built */
  canAddToDeck: function () {
    var cardsInDeck = this.get('controllers.deck.cards'),
        cardsInSideboard = this.get('controllers.deck.sideboard'),
        currentCardName = this.get('model.name');

    if (basicLands.contains(currentCardName)) {
      return true;
    }

    return cardsInDeck.filterBy('name', currentCardName).length +
           cardsInSideboard.filterBy('name', currentCardName).length < 4;
  }.property('controllers.deck.cards.@each', 'controllers.deck.sideboard.@each', 'model'),

  /** @property {Boolean} - is this card not allowed to go in the main deck */
  cannotAddToDeck: Ember.computed.not('canAddToDeck'),

  /** @property {Boolean} - can this card be removed from the main deck */
  canRemoveFromMainDeck: function () {
    var currentCardName = this.get('model.name');

    return this.get('controllers.deck.cards').filterBy('name', currentCardName).length;
  }.property('controllers.deck.cards.@each', 'model'),

  /** @property {Boolean} - is this card allowed to be removed from the main deck */
  cannotRemoveFromMainDeck: Ember.computed.not('canRemoveFromMainDeck'),

  /** @property {Boolean} - can this card be removed from the side deck */
  canRemoveFromSideDeck: function () {
    var currentCardName = this.get('model.name');

    return this.get('controllers.deck.sideboard').filterBy('name', currentCardName).length;    
  }.property('controllers.deck.sideboard.@each'),

  /** @property {Boolean} - can this card be removed from the side deck */
  cannotRemoveFromSideDeck: Ember.computed.not('canRemoveFromSideDeck'),

  /** @propert {Boolean} - can this card be removed from any deck */
  cannotRemoveFromAnyDeck: Ember.computed.and('cannotRemoveFromMainDeck', 'cannotRemoveFromSideDeck')
});