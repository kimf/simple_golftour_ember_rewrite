import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  model: function() {
    var session = this.container.lookup('simple-auth-session:main');
    if (session.isAuthenticated) {
      return this.store.findAll('tour');
    } else {
      return false;
    }
  },

  setupController: function(controller, model){
    if(model){
      controller.set('attrs.tours', model);
    }
  },

  renderTemplate: function() {
    var session = this.container.lookup('simple-auth-session:main');
    if (session.isAuthenticated) {
      this.render('application');
    } else {
      this.render('public');
    }
  }

});
