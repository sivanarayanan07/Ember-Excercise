import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('queues');
  this.route('execise2');
  this.route('exercise3');
});

export default Router;
