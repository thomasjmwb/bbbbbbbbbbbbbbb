import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
window.Em = Ember;

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

window.Em.c = function(controllerName){
	var controller = "controller:"+controllerName;
	return App.__container__.lookup(controller);
};

loadInitializers(App, config.modulePrefix);

export default App;
