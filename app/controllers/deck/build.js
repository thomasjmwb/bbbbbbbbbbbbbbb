import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['sets', 'cards'],

  filtersActive: false,

  mainDeckExpanded: true,
  mainDeckInstantsExpanded: true,
  mainDeckCreaturesExpanded: true,

  actions: {
    toggle: function (propertyName) {
      this.toggleProperty(propertyName);
    }
  }
});