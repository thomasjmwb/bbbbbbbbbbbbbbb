import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['sets', 'cards', 'deck'],

  filtersActive: false,

  doNotShowTypes: [],

  canShowMainDeck: function () {
    return !this.get('doNotShowTypes').contains('mainDeck');
  }.property('doNotShowTypes.@each'),

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