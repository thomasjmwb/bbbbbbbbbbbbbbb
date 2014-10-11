import Ember from 'ember';

export default Ember.ArrayController.extend({
  displayCards: function () {
    return this.get('model').slice(0, 100);
  }.property('model')
});
