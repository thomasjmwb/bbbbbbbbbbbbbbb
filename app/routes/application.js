import Ember from 'ember';
import Card from 'webatrice/models/card';
import ENV from 'webatrice/config/environment';

function _createCards (cardKeys, data) {
  return cardKeys.map(function (cardKey) {
    return Card.create(data[cardKey]);
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

  actions: {

    openModal: function (modalName, model) {
      return this.render(modalName, {
        controller: modalName,
        model: model ? model : Ember.Object.create({}),
        into: 'application',
        outlet: 'modal'
      });
    },

    closeModal: function () {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
