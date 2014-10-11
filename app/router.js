import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('users', function () {
    this.resource('user', {path: '/:id'}, function () {
      this.resource('decks', function () {
        this.resource('deck', {path: '/:id'});
      });
    });
  });  
});

export default Router;
