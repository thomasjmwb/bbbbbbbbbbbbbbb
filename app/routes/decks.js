import Ember from 'ember';
import Card from '../models/card';
import Deck from '../models/deck';
import Set from '../models/set';
import ENV from '../config/environment';

function _createCards (cardKeys, data) {
  var cards = [];
  cardKeys.forEach(function (cardKey) {
    cards.push(Card.create(data[cardKey]));
  });

  return cards;
}

function _createSets (sets) {
  return sets.map(function (s) {
    return Set.create(s);
  });
}

export default Ember.Route.extend({
  beforeModel: function () {
    var cardsController = this.controllerFor('cards');
    if (ENV.environment === 'development') {
      return Ember.$.getJSON('/api/cards').then(function (data) {
        cardsController.set('model', _createCards(Ember.keys(data.cards[0]), data.cards[0]));
      });
    } else {
      return Ember.$.ajax({
        url: 'http://mtgjson.com/json/AllCards-x.jsonp',
        jsonpCallback: 'mtgjsoncallback',
        dataType: 'jsonp',
        success: function (data) {
          cardsController.set('model', _createCards(Ember.keys(data), data));
        }
      });
    }
  },

  afterModel: function () {
    var setsController = this.controllerFor('sets');
    return Ember.$.getJSON('/api/sets').then(function (data) {
      setsController.set('model', _createSets(data.sets));
    });
  },

  actions: {
    showCard: function (card) {
      this.render('card', {
        into: 'deck.build',
        outlet: 'card',
        model: card,
        controller: 'card'
      });
    },

    importDeck: function () {
      var cards = this.controllerFor('cards').get('model'),
          deck = Deck.createDeck(this.get('controller.importContents'), cards);

      Bootstrap.ModalManager.hide('deckImport');
      this.transitionTo('deck.build', deck);
    },

    showImportDeckModal: function () {
      return Bootstrap.ModalManager.show('deckImport');
    }
  }
});
