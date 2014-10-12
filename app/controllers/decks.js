import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['sets', 'cards'],

  filtersActive: false,

  actions: {
    toggleFilters: function () {
      this.toggleProperty('filtersActive');
    }
  }
});
