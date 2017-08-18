import DS from 'ember-data';
import GoogleAdapter from './google';


export default GoogleAdapter.extend({

  urlForQueryRecord(id, modelName, snapshot) {
    return this.get('host') + '/plus/v1/people/me';
  }


});
