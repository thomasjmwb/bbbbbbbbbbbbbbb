import { test, moduleFor } from 'ember-qunit';
import Ember from 'ember';
import FilterableMixin from 'webatrice/mixins/filterable-mixin';

module('FilterableMixin');

var arrayController = Ember.ArrayController.extend(FilterableMixin);
var filterProperties = [
      Ember.Object.create({
        propertyName: 'color',
        values: ['red'],
        and: false
      })
    ];

test('it exists', function () {
 var obj = Ember.Object.extend(FilterableMixin);
 var subject = obj.create();
 ok(subject);
});

test('it can filter out all blue colors', function () {
  var subject = arrayController.create({
    model: [{color: 'blue'},
            {color: 'red'},
            {color: 'blue'}],
    filterProperties: filterProperties
  });

  equal(subject.get('arrangedContent.length'), 1);
});

test('it doesn\'t try to filters on objects that have already been filtered out', function () {
  var subject = arrayController.create({
    model: [{color: 'blue'}, {color: 'blue'},
            {color: 'blue'}, {color: 'red'},
            {color: 'red'}, {color: 'green'}],
    filterProperties: filterProperties
  });

  equal(subject.get('arrangedContent.length'), 2);
  subject.get('filterProperties')[0].set('values', ['red', 'green']);
  equal(subject.get('arrangedContent.length'), 3);
});