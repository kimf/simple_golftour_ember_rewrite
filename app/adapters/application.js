import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';
//import config from '../config/environment';

export default ActiveModelAdapter.extend({
  coalesceFindRequests: true,
  namespace: 'api/v1',
  // host: config.APP.apiURL,

  // buildURL: function(record, suffix) {
  //   var s = this._super(record, suffix);
  //   return s + ".json";
  // }
});
