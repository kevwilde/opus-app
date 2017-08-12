import Ember from 'ember';
import request from 'ic-ajax';


export default Ember.Controller.extend({


  actions: {
    reboot: function() {
      return request('/power/reboot');
    },
    shutdown: function() {
      return request('/power/shutdown');
    }

  }

});
