import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['sets', 'cards'],

  filtersActive: false,

  mainDeckExpanded: true,
  mainDeckInstantsExpanded: true,
  mainDeckCreaturesExpanded: true,
  mainDeckArtifactsExpanded: true,
  mainDeckSorceriesExpanded: true,
  mainDeckEnchantmentsExpanded: true,
  mainDeckLandsExpanded: true,

  actions: {
    toggle: function (propertyName) {
      this.toggleProperty(propertyName);
    }
  }
});