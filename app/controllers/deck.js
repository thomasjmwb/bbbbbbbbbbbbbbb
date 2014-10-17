import Ember from 'ember';

export default Ember.ObjectController.extend({
  mainDeckExpanded: true,
  mainDeckInstantsExpanded: true,

  actions: {
    toggle: function (propertyName) {
      this.toggleProperty(propertyName);
    }
  }
});