import Ember from 'ember';
import Deck from 'webatrice/models/deck';

export default Ember.ObjectController.extend({
  actions: {
    close: function() {
      return this.send('closeModal');
    },
    
    importDeck: function () {
      var cards = this.controllerFor('cards').get('model'),
        deck = Deck.createDeck(this.get('importContents'), cards);

      this.send('closeModal');
      this.transitionTo('deck.build', deck);
    }
  }
});
