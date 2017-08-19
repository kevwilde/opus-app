import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let store = this.get('store');

    // Find all calendars
    store.query('google-calendar', {}).then(function(calendars) {
      let timeMin = new Date(),
          timeMax = new Date(),
          maxDate = new Date(timeMin).getDate() + 31;
          timeMax.setDate(maxDate);

      // Query for all events in the calendar
      calendars.forEach(function(item, index, enumerable) {
        let calendarId = item.get('id');
        if (item.get('selected')) {
          store.query('google-calendar-event', {
            'id' : calendarId,
            'singleEvents': true,
            'timeMin': timeMin.toISOString(),
            'timeMax': timeMax.toISOString()
          })
        }
      }.bind(this));
    });

    // Stores them in an RSVP hash
    return this.get('store').peekAll('google-calendar-event');
  },

});
