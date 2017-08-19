import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  status: DS.attr('string'),
  summary: DS.attr('string'),
  description: DS.attr('string'),
  creator: DS.attr(),
  organizer: DS.attr(),
  start: DS.attr(),
  end: DS.attr(),
  allDay: DS.attr('boolean'),

  startDate: Ember.computed('start', function() {
    return new Date(this.get('start.dateTime'));
  }),
  endDate: Ember.computed('end', function() {
    return new Date(this.get('end.dateTime'));
  }),
  fullCalendarEvent: Ember.computed('startDate', 'endDate', 'summary', 'allDay', function() {
    return {
      start: this.get('startDate'),
      end: this.get('endDate'),
      title: this.get('summary'),
      allDay: this.get('allDay')
    }
  })
});
