import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    showCard: function (card) {
      this.transitionTo('card', Ember.get(card, 'name'));
    }
  }
});
