import Ember from 'ember';

export default Ember.ArrayController.extend({

  standardSets: function () {
    var sets = this.get('model'),
        standardSetNames = this.get('standardSetNames');
    return sets.filter(function (s) {
      return standardSetNames.contains(s.name);
    });
  }.property('model', 'standardSetNames'),

  /** @property {Array[String]} is the allowed set names currently for standard */
  standardSetNames: function () {
    return ['Theros', 'Born of the Gods', 'Journey into Nyx', 'Magic 2015 Core Set', 'Khans of Takir'];
  }.property('standardSets')
});
