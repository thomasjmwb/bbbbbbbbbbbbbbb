import Ember from 'ember';

function getCardObj (cards, card) {
  var cardObj = false;

  cards.forEach(function (c) {
    if (c.name === card.name) {
      cardObj = c;
    }
  });

  return cardObj;
}
export default Ember.Object.extend({
  name: null,

  comments: null,

  cards: [],

  sideboard: [],

  numMainDeckInstants: function () {
    var mainDeckInstants = this.get('mainDeckInstants') || [];

    return mainDeckInstants.reduce(function (prev, curr) {
      return prev + curr.count;
    }, 0);
  }.property('mainDeckInstants.@each'),

  mainDeckInstants: function () {
    var instants = this.get('cards').filter(function (card) {
      return card.types[0].toLowerCase() === 'instant';
    });

    return instants.reduce(function (prev, curr) {
      var cardObj = getCardObj(prev, curr);

      if (cardObj) {
        cardObj.count++;
      } else {
        prev.push({
          name: curr.name,
          count: 1,
          card: curr
        });
      }

      return prev;
    }, []);
  }.property('cards.@each')
});