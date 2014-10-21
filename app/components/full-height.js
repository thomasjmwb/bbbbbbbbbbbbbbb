import Ember from 'ember';

function resize () {
  var windowHeight = Ember.$(window).height(),
      navHeight = Ember.$('#navbar').outerHeight(true);

  this.$().height(windowHeight - navHeight);
}
export default Ember.Component.extend({
  didInsertElement: function () {
    resize.call(this);
    Ember.$(window).resize(resize.bind(this));
  }
});