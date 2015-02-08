import Ember from 'ember';

var basicLands = ['Plains', 'Island', 'Swamp', 'Mountain', 'Forest', 'Snow-Covered Plains',
  'Snow-Covered Island', 'Snow-Covered Swamp', 'Snow-Covered Mountain', 'Snow-Covered Forest'];

export default Ember.Component.extend({
  classNames: ['row'],

  /** @property {Boolean} - can this card be added to the main deck being built */
  canAddToDeck: function () {
    var cardsInDeck = this.get('deck.cards'),
      cardsInSideboard = this.get('deck.sideboard'),
      currentCardName = this.get('card.name');

    if (basicLands.contains(currentCardName)) {
      return true;
    }

    return cardsInDeck.filterBy('name', currentCardName).length +
      cardsInSideboard.filterBy('name', currentCardName).length < 4;
  }.property('deck.cards.@each', 'deck.sideboard.@each', 'card'),

  /** @property {Boolean} - is this card not allowed to go in the main deck */
  cannotAddToDeck: Ember.computed.not('canAddToDeck'),

  /** @property {Boolean} - can this card be removed from the main deck */
  canRemoveFromMainDeck: function () {
    var currentCardName = this.get('card.name');

    return this.get('deck.cards').filterBy('name', currentCardName).length;
  }.property('deck.cards.@each', 'deck'),

  /** @property {Boolean} - is this card allowed to be removed from the main deck */
  cannotRemoveFromMainDeck: Ember.computed.not('canRemoveFromMainDeck'),

  /** @property {Boolean} - can this card be removed from the side deck */
  canRemoveFromSideDeck: function () {
    var currentCardName = this.get('card.name');

    return this.get('deck.sideboard').filterBy('name', currentCardName).length;
  }.property('deck.sideboard.@each'),

  /** @property {Boolean} - can this card be removed from the side deck */
  cannotRemoveFromSideDeck: Ember.computed.not('canRemoveFromSideDeck'),

  /** @propert {Boolean} - can this card be removed from any deck */
  cannotRemoveFromAnyDeck: Ember.computed.and('cannotRemoveFromMainDeck', 'cannotRemoveFromSideDeck'),

  actions: {
    addToMain: function (card) {
      this.get('deck.cards').pushObject(card);
    },

    addToSide: function (card) {
      this.get('deck.sideboard').pushObject(card);
    },

    removeAllFromMain: function (card) {
      this.get('deck.cards').removeObject(card);
    },

    removeOneFromMain: function (card) {
      var cards = this.get('deck.cards'),
        cardName = card.get('name'),
        i = 0,
        index;

      cards.forEach(function (c) {
        if (c.get('name') === cardName) {
          index = i;
        }
        i++;
      });

      cards.removeAt(index);
    },

    removeAllFromSide: function (card) {
      this.get('deck.sideboard').removeObject(card);
    },

    removeOneFromSide: function (card) {
      var cards = this.get('deck.sideboard'),
        cardName = card.get('name'),
        i = 0,
        index;

      cards.forEach(function (c) {
        if (c.get('name') === cardName) {
          index = i;
        }
        i++;
      });

      cards.removeAt(index);
    }
  }
});
