import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    close: function () {
      debugger;
      return this.sendAction();
    }
  }
});
