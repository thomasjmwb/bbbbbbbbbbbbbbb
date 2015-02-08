import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['sets', 'cards', 'deck'],

  filtersActive: false,

  doNotShowTypes: [],

  displayCards: Ember.computed.alias('controllers.cards.displayCards'),

  searchTerm: Ember.computed.alias('controllers.cards.searchTerm'),

  canShowMainDeck: function () {
    return !this.get('doNotShowTypes').contains('mainDeck');
  }.property('doNotShowTypes.@each'),

  canShowSideDeck: function () {
    return !this.get('doNotShowTypes').contains('sideDeck');
  }.property('doNotShowTypes.@each'),

  canShowDeckTable: function () {
    return this.get('cards.length') || this.get('sideboard.length');
  }.property('cards.@each', 'sideboard.@each'),

  actions: {
    toggle: function (propertyName) {
      this.toggleProperty(propertyName);
    },

    showHide: function (superType) {
      var doNotShowTypes = this.get('doNotShowTypes');

      if (doNotShowTypes.contains(superType)) {
        doNotShowTypes.removeAt(doNotShowTypes.indexOf(superType));
      } else {
        doNotShowTypes.pushObject(superType);
      }
    }
  }
});
