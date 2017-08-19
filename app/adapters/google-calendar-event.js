import DS from 'ember-data';
import GoogleAdapter from './google';


export default GoogleAdapter.extend({

  urlForQuery(id, modelName, snapshot) {
    return this.get('host') + '/calendar/v3/calendars/'+encodeURIComponent(id.id)+'/events';
  }

});
