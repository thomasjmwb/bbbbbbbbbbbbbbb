import Ember from 'ember';

export default Ember.ArrayController.extend({

  standardSets: function () {
    var sets = this.get('model'),
        standardSetNames = this.get('standardSetNames');
    return sets.filter(function (s) {
      return standardSetNames.contains(s.name);
    });
  }.property('model', 'standardSetNames'),

  standardSetNames: function () {
    return ['Return to Ravnica', 'Gatecrash', 'Dragon\'s Maze', 'Magic 2014 Core Set', 'Theros', 'Born of the Gods', 'Journey into Nyx', 'Magic 2015 Core Set'];
  }.property('standardSets')
});
