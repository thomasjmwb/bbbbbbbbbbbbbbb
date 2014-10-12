import Ember from 'ember';

export default Ember.Object.extend({
  recentSet: function () {
    var printings = this.get('printings');

    return printings[printings.length -1];    
  }.property('printings'),

  imageUrl: function () {
    return 'http://mtgimage.com/card/' + this.get('name') + '.jpg';
  }.property('name')
});