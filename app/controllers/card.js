import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['deck'],

  canAddToDeck: function () {
    var cardsInDeck = this.get('controllers.deck.cards'),
        currentCard = this.get('model');

    return cardsInDeck.filterBy('name', currentCard.get('name')).length < 4;
  }.property('controllers.deck.cards.@each'),

  cannotAddToDeck: Ember.computed.not('canAddToDeck')
});