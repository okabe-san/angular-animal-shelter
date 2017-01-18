(function() {

  'use strict';

  angular
    .module('animalsApp.config', ['ngRoute'])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .when('/comment', {
      templateUrl: 'js/components/comment/comment.view.html',
      controller: 'commentController',
      controllerAs: 'commentCtrl'
    })
    .otherwise('/');
  }

})();
