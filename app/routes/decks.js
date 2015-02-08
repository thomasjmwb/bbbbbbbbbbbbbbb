import Ember from 'ember';
import Set from 'webatrice/models/set';
import ENV from 'webatrice/config/environment';

function _createSets (sets) {
  return sets.map(function (s) {
    return Set.create(s);
  });
}

export default Ember.Route.extend({
  model: function () {
    return [];
  },

  afterModel: function () {
    var setsController = this.controllerFor('sets');
    if (ENV.environment === 'development') {
      return Ember.$.getJSON('/api/sets').then(function (data) {
        setsController.set('model', _createSets(data.sets));
      });
    } else {
      return Ember.$.ajax({
        url: 'http://mtgjson.com/json/SetList.jsonp',
        jsonpCallback: 'mtgjsoncallback',
        dataType: 'jsonp',
        success: function (data) {
          setsController.set('model', _createSets(data));
        }
      });
    }
  },

  actions: {
    showCard: function (card) {
      this.controllerFor('deck.build').set('selectedCard', card);
    }
  }
});
