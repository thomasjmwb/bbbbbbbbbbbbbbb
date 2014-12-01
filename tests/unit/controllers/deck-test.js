import {
  moduleFor,
  test
} from 'ember-qunit';
import Deck from 'webatrice/models/deck';

moduleFor('controller:deck', 'DeckController', {
  // Specify the other units that are required for this test.
  needs: ['controller:sets']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
