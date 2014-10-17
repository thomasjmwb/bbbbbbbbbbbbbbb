import Ember from 'ember';
import Card from '../models/card';

export default Ember.Route.extend({
  beforeModel: function () {
    var cardsController = this.controllerFor('cards');
    return Ember.$.get('/api/cards', function (data) {
      var cards = [],
          cardKeys = Ember.keys(data.cards[0]);
      cardKeys.forEach(function (card) {
        cards.push(Card.create(data.cards[0][card]));
      });
      cardsController.set('model', cards);
    });
  },

  actions: {
    showCard: function (card) {
      this.render('card', {
        into: 'decks',
        outlet: 'card',
        model: card,
        controller: 'card'
      });
    }
  }
});
