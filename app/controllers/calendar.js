import Ember from 'ember';

export default Ember.Controller.extend({

  events: Ember.computed.map('model', function(event) {
    return event.get('fullCalendarEvent');
  }),

  listViewConfiguration: {
    list: {
      duration: { days: 7 },
      listDayAltFormat: 'dddd',
    }
  },

});
