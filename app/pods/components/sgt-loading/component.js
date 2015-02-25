import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  didInsertElement: function(){
    window.setTimeout( () => {
      this.setBarWidth(0);
    }, 500);
  },

  setBarWidth: function(number){
    var num = number + 1;
    Ember.$('#loading .bar').width(parseInt(num)+'px');

    if(num < 200){
      window.setTimeout( () => {
        this.setBarWidth(num);
      }, 5);
    } else {
      Ember.$('#loading').addClass('hidden');
    }
  }
});
