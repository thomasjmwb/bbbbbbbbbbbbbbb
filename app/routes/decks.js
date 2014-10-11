import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function () {
    var cardsController = this.controllerFor('cards');
    return Ember.$.get('/api/cards', function (data) {
      var cards = [],
          cardKeys = Ember.keys(data.cards[0]);
      cardKeys.forEach(function (card) {
        cards.push(data.cards[0][card]);
      });
      cardsController.set('model', cards);
    });
  },

  model: function () {

  }
});
