import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('app', function(){
    this.route('schedule');
    this.route('tour', {path: '/tours/:tour_id'});

    this.route('settings');
  });

  this.route('signup');

});

export default Router;
