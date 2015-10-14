import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  'current-user-role': DS.attr('string'),

  presentableRole: Ember.computed('current-user-role', function() {
    var role = this.get('current-user-role');
    switch(role){
      case 'admin':
      case 'creator':
        return '<small>(admin)</small>';
      default:
        return '';
    }
  })
});
