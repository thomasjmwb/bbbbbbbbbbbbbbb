import Ember from 'ember';
import filterableMixin from '../mixins/filterable_mixin';

export default Ember.ArrayController.extend(filterableMixin, {

  filterProperties: [
    {
      label: 'Card Types',
      propertyName: 'mainType',
      values: ['Creature', 'Enchantment', 'Land', 'Instant', 'Sorcery'],
      possibleValues: ['Creature', 'Enchantment', 'Land', 'Instant', 'Sorcery'],
      valuesDisplay: ['Creature', 'Enchantment', 'Land', 'Instant', 'Sorcery'],
      and: false
    },
    {
      label: 'Color',
      propertyName: 'colors',
      values: [ 'Black', 'Blue', 'Green', 'Red', 'White'],
      possibleValues: [ 'Black', 'Blue', 'Green', 'Red', 'White'],
      valuesDisplay: [ 'Black', 'Blue', 'Green', 'Red', 'White'],
      and: false
    }
//    {
//      label: 'Format',
//      propertyName: 'legalities',
//      values: ['Standard', 'Modern'],
//      entries: [
//        Ember.Object.create({
//          label: 'Standard',
//          name: 'standard',
//          isChecked: false
//        }),
//        Ember.Object.create({
//          label: 'Modern',
//          name: 'modern',
//          isChecked: false
//        })
//      ],
//      and: false
//    }
  ],
  displayCards: function () {
    return this.get('arrangedContent').slice(0, 100);
  }.property('arrangedContent')
});
