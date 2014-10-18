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

var CardObj = Ember.Object.extend({
  numberOf: function () {
    return this.get('cardObjs').reduce(function (prev, curr) {
      return prev + curr.count;
    }, 0);
  }.property('cardObjs'),

  superType: function () {
    return this.get('isMain') ? 'main' + this.get('type') : 'side' + this.get('type');
  }.property('isMain', 'type')
});

export default Ember.Object.extend({
  /** @property {String} - the deck name */
  name: null,

  /** @property {String} - user defined comments about the deck */
  comments: null,

  /** @property {Array[Card]} - an array of Cards that make up the main deck */
  cards: [],

  /** @property {Array[Card]} - an array of Cards that make up the sideboard */
  sideboard: [],

  /** @property {Array[String]} - an array of all the different main card types in the deck */
  cardTypes: function () {
    return this.get('cards').mapBy('mainType').uniq();
  }.property('cards.@each'),

  /** @property {Array[CardObj]} - an array of CardObj that populates the deck table */
  mainDeckGroupings: function () {
    var cards = this.get('cards'),
        cardTypes = this.get('cardTypes'),
        cardGroups = cardTypes.map(function (cT) {
          return CardObj.create({
            isMain: true,
            type: cT,
            cardObjs: cards.filterBy('mainType', cT).reduce(groupByName, [])
          });
        });

    return cardGroups;
  }.property('cards.@each')
});