/**
 * Created by thomas.wbridge on 10/18/14.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'label',
  isCheckbox: function(){
    if(this.get('type')==='checkbox'){
      return true;
    }
    return false;
  }.property('type'),
  isSelected: function(){
    return this.get('fp.values').indexOf(this.get('value')) >-1;
  }.property('fp.values', 'value'),
  index: function(){
    return this.get('fp.valuesDisplay').indexOf(this.get('displayValue'));
  }.property('fp.displayValues', 'displayValue'),
  value: function(){
    var index = this.get('index');
    return  this.get('fp.possibleValues')[index];
  }.property(),
  change: function () {
    // add value to values array or remove from values array
    var values = this.get('fp.values'),
      value = this.get('value'),
      isSelected = this.get('isSelected'),
      fp = this.get('fp');
    if(!isSelected){
      Ember.set(fp, 'values', values.without(value));
    } else {
      values.push(value);
      Ember.set(fp, 'values', values.slice());
    }
  }
});