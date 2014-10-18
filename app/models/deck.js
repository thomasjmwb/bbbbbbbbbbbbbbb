import Ember from 'ember';

function groupByName (prev, curr) {
  var cardObj = prev.findBy('card.name', curr.name);

  if (cardObj) {
    cardObj.count++;
  } else {
    prev.push({
      count: 1,
      card: curr
    });
  }

  return prev;
}

export default Ember.Object.extend({
  /** @property {String} - the deck name */
  name: null,

  /** @property {String} - user defined comments about the deck */
  comments: null,

  /** @property {Array[Card]} - an array of Cards that make up the main deck */
  cards: [],

  /** @property {Array[Card]} - an array of Cards that make up the sideboard */
  sideboard: [],

  /** @property {Number} - number of instants in the main deck */
  numMainDeckInstants: function () {
    var mainDeckInstants = this.get('mainDeckInstants') || [];

    return mainDeckInstants.reduce(function (prev, curr) {
      return prev + curr.count;
    }, 0);
  }.property('mainDeckInstants.@each'),

  /** @property {Array[CardObj]} - an array of CardObjs consisting of:
    * count - the number of cards of that name
    * card - the actual Card
    */
  mainDeckInstants: function () {
    var instants = this.get('cards').filter(function (card) {
      return card.types[0].toLowerCase() === 'instant';
    });

    return instants.reduce(groupByName, []);
  }.property('cards.@each'),

  /** @property {Number} - number of creatures in the main deck */
  numMainDeckCreatures: function () {
    var mainDeckCreatures = this.get('mainDeckCreatures') || [];

    return mainDeckCreatures.reduce(function (prev, curr) {
      return prev + curr.count;
    }, 0);
  }.property('mainDeckCreatures.@each'),

  /** @property {Array[CardObj]} - an array of CardObjs consisting of:
    * count - the number of cards of that name
    * card - the actual Card
    */
  mainDeckCreatures: function () {
    var creatures = this.get('cards').filter(function (card) {
      return card.types[0].toLowerCase() === 'creature';
    });

    return creatures.reduce(groupByName, []);
  }.property('cards.@each'),
});