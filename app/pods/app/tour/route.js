import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.find('tour', params.tour_id);
  },

  setupController(controller, model) {
    controller.set('attrs.tour', model);
  }

});
