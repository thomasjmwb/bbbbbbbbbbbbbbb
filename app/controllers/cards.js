import Ember from 'ember';
import filterableMixin from '../mixins/filterable_mixin';

export default Ember.ArrayController.extend(filterableMixin, {

  filterProperties: [
    {
      label: 'Card Types',
      propertyName: 'mainType',
      values: ['Creature', 'Enchantment', 'Land', 'Instant', 'Sorcery', 'Artifact'],
      possibleValues: ['Creature', 'Enchantment', 'Land', 'Instant', 'Sorcery', 'Artifact'],
      valuesDisplay: ['Creature', 'Enchantment', 'Land', 'Instant', 'Sorcery', 'Artifact'],
      and: false
    },
    {
      label: 'Color',
      propertyName: 'colors',
      values: [ 'Black', 'Blue', 'Green', 'Red', 'White'],
      possibleValues: [ 'Black', 'Blue', 'Green', 'Red', 'White'],
      valuesDisplay: [ 'Black', 'Blue', 'Green', 'Red', 'White'],
      and: false
    },
    {
      label: 'Legalities',
      propertyName: 'legal',
      values: [ 'isStandard', 'isModern', 'isLegacy', 'isVintage'],
      possibleValues: [ 'isStandard', 'isModern', 'isLegacy', 'isVintage'],
      valuesDisplay: [ 'Standard', 'Modern', 'Legacy', 'Vintage'],
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
    return this.get('searchedContent').slice(0, 100);
  }.property('searchedContent'),

  searchedContent: function () {
    var searchTerm = this.get('searchTerm'),
        arrangedContent = this.get('arrangedContent');

    if (!searchTerm) {
      return arrangedContent;
    }

    return arrangedContent.filter(function (c) {
      return c.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }.property('arrangedContent', 'searchTerm'),

  /** @property {String} the current search term */
  searchTerm: ''
});
