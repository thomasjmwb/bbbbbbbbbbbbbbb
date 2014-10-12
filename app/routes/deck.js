import Ember from 'ember';
import Deck from '../models/deck';

export default Ember.Route.extend({
  model: function () {
    return Deck.create();
  }
});