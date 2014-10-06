import Ember from 'ember';

export default Ember.Controller.extend({
  isAuthenticated: false,

  //can be guest or user
  authenticationType: null
});