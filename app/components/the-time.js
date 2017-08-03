import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['time'],
  clock: Ember.inject.service('the-clock'),

  time: Ember.computed('clock.time', function() {
    let clock = this.get('clock.date'),
        options = {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit'
        };
    return clock.toLocaleTimeString('en', options);
  }),

  init: function() {
    this._super(...arguments);
    this.get('clock').init();
  },
});
