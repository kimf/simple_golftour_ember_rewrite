import DS from 'ember-data';
//import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  coalesceFindRequests: true,
  namespace: 'api/v1',
  // host: config.APP.apiURL,

  // buildURL: function(record, suffix) {
  //   var s = this._super(record, suffix);
  //   return s + ".json";
  // }
});
