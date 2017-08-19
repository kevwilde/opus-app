import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let items = payload['items'];

    // Make all start and end timings equal
    // Some responses only contain a start.date instead of a start.dateTime. We
    // push everything to the start.dateTime property.
    for (var i=0, l=items.length; i<l; i++) {
      let item = items[i];
      if (item.start.dateTime == undefined) {
        items[i].start.dateTime = item.start.date;
        items[i].allDay = true
      }
      if (item.end.dateTime == undefined) {
        items[i].end.dateTime = item.end.date;
      }
    }


    return this._normalizeResponse(store, primaryModelClass, items, id, requestType, false);
  },

});
