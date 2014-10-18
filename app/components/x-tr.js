import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  click: function () {
    this.sendAction('action', this.get('param'));
  }
});