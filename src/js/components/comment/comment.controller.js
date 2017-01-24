(function() {

  'use strict';

  angular
    .module('animalsApp.components.comment', [])
    .controller('commentController', commentController);

  commentController.$inject = ['$scope', 'mainService'];

  function commentController($scope, mainService) {
    /*jshint validthis: true */
    this.greeting = 'Information';
    // this.animal = animal;
  }

  // function animal(num, mainService) {
  //   console.log('test');
  //   /*jshint validthis: true */
  //   this.animal = mainService.animal[num];
  // }

})();
