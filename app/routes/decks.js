import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function () {
    var cardsController = this.controllerFor('cards');
    return Ember.$.get('/api/cards', function (data) {
      console.log(Em.keys(data.cards[0]).length);
      var cards = [],
          cardKeys = Em.keys(data.cards[0]).slice(0, 100);
      cardKeys.forEach(function (card) {
        cards.push(data.cards[0][card]);
      });
      cardsController.set('model', cards);
    });
  },

  model: function () {

  }
});
