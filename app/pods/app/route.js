import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('tour');
  },

  setupController(controller, model) {
    controller.set('attrs.tours', model);
  }

});
