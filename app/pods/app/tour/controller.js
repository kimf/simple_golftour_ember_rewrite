import Ember from 'ember';

export default Ember.Controller.extend({
  attrs: {},
  tour: Ember.computed.alias('attrs.tour')
});
