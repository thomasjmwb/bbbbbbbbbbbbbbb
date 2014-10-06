import Ember from 'ember';

export default Ember.ArrayController.extend({
  cards: function () {
    var sets = this.get('model'),
        cards = [];

    sets.forEach(function (set) {
      set.cards.forEach(function (card) {
        cards.push({
          name: card.name,
          mana: card.manaCost,
          set: set.name,
          type: card.type,
          pt: card.power + '/' + card.toughness
        });
      });
    });

    return cards;
  }.property('model')
});
