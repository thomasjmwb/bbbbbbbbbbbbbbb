import Ember from 'ember';
import Card from '../models/card';
import Deck from '../models/deck';

export default Ember.Route.extend({
  beforeModel: function () {
    var cardsController = this.controllerFor('cards'),
        localStoreCards = Ember.$.jStorage.get('localStoreCards');

    if (localStoreCards) {
      var decompressedCards = JSON.parse(LZString.decompressFromUTF16(localStoreCards));
      debugger;
      cardsController.set('model', decompressedCards);
    } else {
      return Ember.$.get('/api/cards', function (data) {
        var cards = [],
            cardKeys = Ember.keys(data.cards[0]);
        cardKeys.forEach(function (card) {
          cards.push(Card.create(data.cards[0][card]));
        });

        Ember.$.jStorage.set('localStoreCards', LZString.compressToUTF16(JSON.stringify(cards)));
        cardsController.set('model', cards);
      });
    }
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
