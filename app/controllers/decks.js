import Ember from 'ember';

export default Ember.ArrayController.extend({
  importModalButtons: [
    Ember.Object.create({title: 'Import', clicked: 'importDeck'}),
    Ember.Object.create({title: 'Cancel', dismiss: 'modal'})
  ]
});