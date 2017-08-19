import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    return this._normalizeResponse(store, primaryModelClass, payload['items'], id, requestType, false);
  },

});
