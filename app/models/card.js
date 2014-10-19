import Ember from 'ember';

export default Ember.Object.extend({
  recentSet: function () {
    var printings = this.get('printings');

    return printings[printings.length -1];    
  }.property('printings'),

  imageUrl: function () {
    return 'http://mtgimage.com/card/' + this.get('name') + '.jpg';
  }.property('name'),

  manaCostFormatted: function () {
    if (!this.get('manaCost')) {
      return '';
    }
    return this.get('manaCost').split('{').join('').split('}').join('');
  }.property('manaCost'),

  powerToughnessFormatted: function () {
    var power = this.get('power'),
        toughness = this.get('toughness');

    return !power && !toughness ? '' : power + '/' + toughness;
  }.property('power', 'toughness'),

  mainType: function () {
    var types = this.get('types');
    if(typeof(types)==="undefined"){
      return '';
    } else if(types.length===0){
      return '';
    }
    return this.get('types')[0];
  }.property('types')
});