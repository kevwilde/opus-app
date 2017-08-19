import DS from 'ember-data';
import Ember from 'ember';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import RESTAdapter from 'ember-data/adapters/rest';

const { computed, inject, isNone } = Ember;


export default RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:google',
  host: 'https://www.googleapis.com',
});
