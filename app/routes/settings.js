import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  model: function() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('google-user', 'me');
    } else {
      return null;
    }
  }
});
