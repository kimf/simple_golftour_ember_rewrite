import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model: function() {
    return this.store.findAll('tour');
  },

  setupController: function(controller, model){
    controller.set('attrs.tours', model);
  }

});
