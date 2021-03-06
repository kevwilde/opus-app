import Ember from 'ember';
import request from 'ic-ajax';


export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  store: Ember.inject.service('store'),

  actions: {
    reboot: function() {
      return request('/power/reboot');
    },
    shutdown: function() {
      return request('/power/shutdown');
    },
    authenticateSession: function() {
      this.get('session').authenticate('authenticator:torii', 'google-oauth2-bearer-v2').then(function() {
        // Fetch personal information
        let me = this.get('store').queryRecord('google-user', 'me');
        this.set('model', me);
        // Sync calendar list
        this.get('store').query('google-calendar', {});
      }.bind(this));
    },
    invalidateSession: function() {
      this.get('session').invalidate();
    }

  }

});
