import Ember from 'ember';
import Deck from '../models/deck';

export default Ember.Route.extend({
  model: function () {
    return Deck.create({});
  },

  actions: {
    addToMain: function (card) {
      this.get('controller.model.cards').pushObject(card);
    },

    addToSide: function (card) {
      this.get('controller.model.sideboard').pushObject(card);
    },

    removeAllFromMain: function (card) {
      this.get('controller.model.cards').removeObject(card);
    },

    removeOneFromMain: function (card) {
      var cards = this.get('controller.model.cards'),
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
      this.get('controller.model.sideboard').removeObject(card);
    },

    removeOneFromSide: function (card) {
      var cards = this.get('controller.model.sideboard'),
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
