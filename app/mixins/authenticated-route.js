import Ember from 'ember';

export default Ember.Route.extend({
  isAuthenticated: Ember.computed.bool('authenticationType'),

  /**
   * @property {String} - Can be GUEST or USER
   */
  authenticationType: null
});