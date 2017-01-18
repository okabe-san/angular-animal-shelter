(function() {

  'use strict';

  angular
    .module('animalsApp.components.comment', [])
    .controller('commentController', commentController);

  commentController.$inject = ['$scope', 'mainService', 'commentService'];

  function commentController($scope, commentService) {
    /*jshint validthis: true */
    this.greeting = 'Comment Page';
  }

})();
