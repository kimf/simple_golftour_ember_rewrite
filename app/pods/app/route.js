import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.findAll('tour');
  },

  setupController: function(controller, model){
    controller.set('attrs.tours', model);
  }

});
