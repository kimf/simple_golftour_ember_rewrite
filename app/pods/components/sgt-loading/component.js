import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement: function(){
    var hasLoaded = window.localStorage.getItem('hasSeenLoadingAnimation');
    if(hasLoaded){
      Ember.$('#loading').remove();
    } else {
      window.setTimeout( () => {
        this.setBarWidth(0);
      }, 500);
    }
  },

  setBarWidth: function(number){
    var num = number + 1;
    Ember.$('#loading .bar').width(parseInt(num)+'px');

    if(num < 200){
      window.setTimeout( () => {
        this.setBarWidth(num);
      }, 5);
    } else {
      window.localStorage.setItem('hasSeenLoadingAnimation', true);
      Ember.$('#loading').addClass('hidden');
    }
  }
});
