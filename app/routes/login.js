import Ember from 'ember';
import AuthenticatedMixin from '../mixins/authenticated-route';

export default Ember.Route.extend(AuthenticatedMixin, {

  actions: {
    loginAsGuest: function () {
      
    }
  }
});