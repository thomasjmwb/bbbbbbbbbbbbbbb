import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function () {
    var setsController = this.controllerFor('sets');
    return Ember.$.get('/api/sets', function (data) {
      setsController.set('model', data.sets);
    });
  },

  model: function () {

  }
});
