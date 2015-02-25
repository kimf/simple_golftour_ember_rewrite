import Ember from 'ember';

export default Ember.Controller.extend({
  attrs: {}
});


    // var setWidth = function(number){
    //   var number = number + 1;
    //   Ember.$('#loading .bar').width(parseInt(number)+'px');

    //   if(number < 90){
    //     setTimeout(function() {
    //       setWidth(number);
    //     }, 25);
    //   } else {
    //     Ember.$('#loading .bar').width(97+'px');
    //     Ember.$('#loading').addClass('hidden');
    //   }
    // }

    // setTimeout(function(){setWidth(0)}, 1000);
