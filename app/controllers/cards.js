import Ember from 'ember';
import filterableMixin from '../mixins/filterable_mixin';

export default Ember.ArrayController.extend(filterableMixin, {

  filterProperties: [
    {
      label: 'Card Types',
      propertyName: 'name',
      values: ['Creature', 'Enchantment', 'Land', 'Instant', 'Sorcery'],
      entries: [
        Ember.Object.create({
          label: 'Creature',
          name: 'creature',
          isChecked: true
        }),
        Ember.Object.create({
          label: 'Enchantment',
          name: 'enchantment',
          isChecked: true
        }),
        Ember.Object.create({
          label: 'Land',
          name: 'land',
          isChecked: true
        }),
        Ember.Object.create({
          label: 'Instant',
          name: 'instant',
          isChecked: true
        }),
        Ember.Object.create({
          label: 'Sorcery',
          name: 'sorcery',
          isChecked: true
        })
      ],
      and: false
    },
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
    return this.get('model').slice(0, 100);
  }.property('model')
});
