import Ember from 'ember';

var Router = Ember.Router.extend({
  location: WebatriceENV.locationType
});

Router.map(function() {
  this.route('login');
});

export default Router;
