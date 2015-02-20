import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.store.find('tour', params.tour_id);
  },

  setupController: function(controller, model){
    controller.set('attrs.tour', model);
  }

});
