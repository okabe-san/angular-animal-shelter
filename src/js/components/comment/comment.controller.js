(function() {

  'use strict';

  angular
    .module('animalsApp.components.comment', [])
    .controller('commentController', commentController);

  commentController.$inject = ['mainService'];

  function commentController(mainService) {
    /*jshint validthis: true */
    this.greeting = 'Information';
    this.animal = mainService.animals[0];
    // this.num = (data) => {
    //   const id = data.id;
    //   this.animal = mainService.animals[id];
    //   console.log(this.animal);
    // };
  }

})();
