import Ember from 'ember';

var Router = Ember.Router.extend({
  location: WebatriceENV.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('decks', function () {
    this.resource('deck', {path: '/:id'});
  });
});

export default Router;
