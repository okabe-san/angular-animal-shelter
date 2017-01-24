(function() {

  'use strict';

  angular
    .module('animalsApp.config', [])
    .config(appConfig);

  function appConfig($stateProvider) {
    $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController as mainCtrl'
    })
    .state('detail', {
      url: '/:id',
      templateUrl: 'js/components/comment/comment.view.html',
      controller: 'commentController as commentCtrl'
    });
  }

})();
