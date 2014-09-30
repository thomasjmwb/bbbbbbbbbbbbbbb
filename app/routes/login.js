import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    loginAsGuest: function () {
      this.controllerFor('session').setProperties({
        isAuthenticated: true,
        authenticationType: 'guest'
      });

      this.transitionTo('decks');
    }
  }
});