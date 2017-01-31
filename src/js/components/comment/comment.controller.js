(function() {

  'use strict';

  angular
    .module('animalsApp.components.comment', [])
    .controller('commentController', commentController);

  commentController.$inject = ['mainService', 'commentService'];

  function commentController(mainService, commentService) {
    /*jshint validthis: true */
    this.greeting = 'Information';
    this.num = (data) => {
      const id = data.id;
      commentService.animal = mainService.animals[id];
    };
    this.animal = commentService.animal;
  }

})();
