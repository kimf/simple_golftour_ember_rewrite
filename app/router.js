import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('dashboard');
  this.route('schedule');
  this.route('tour', {path: '/tours/:tour_id'});

  this.route('signup');

});

export default Router;
