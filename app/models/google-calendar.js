import DS from 'ember-data';

export default DS.Model.extend({
  summary: DS.attr('string'),
  timeZone: DS.attr('string'),
  summaryOverride: DS.attr('string'),
  colorId: DS.attr('string'),
  backgroundColor: DS.attr('string'),
  foregroundColor: DS.attr('string'),
  selected: DS.attr('boolean', { default: false }),
});
