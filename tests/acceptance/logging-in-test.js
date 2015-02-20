import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: LoggingIn', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('when not logged in, public site is shown and login is possible', function(assert) {
  invalidateSession();
  visit('/app');

  andThen(function(){
    assert.equal(find('a').text(), 'Login');
    assert.equal(currentPath(), 'index');
  });

  click('a:contains(Login)');
  fillIn('E-mail', 'kim@fransman.se');
  fillIn('Password', 'password');
  click('button:contains(Login)');
  andThen(function(){
    assert.equal(find('h4').text(), 'KIM FRANSMAN');
    assert.equal(find('a').text(), 'Logout');
    assert.equal(currentPath(), 'dashboard');
  });
});

test('when logged in, app is shown and logout is possible', function(assert) {
  authenticateSession();
  visit('/');

  andThen(function(){
    assert.equal(find('a').text(), 'Logout');
    assert.equal(currentPath(), 'dashboard');
  });

  click('a:contains(LOGGA UT)');

  andThen(function() {
    assert.equal(currentPath(), 'index');
    assert.equal(find('legend').text(), 'Logga in');
  });
});
