import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('traffic');
  this.route('dashboard', { path: '/' });
  this.route('music');
});

export default Router;
