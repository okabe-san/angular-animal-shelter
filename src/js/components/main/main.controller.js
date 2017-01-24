(function() {

  'use strict';

  angular
    .module('animalsApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'mainService'];

  function mainController($scope, mainService) {
    /*jshint validthis: true */
    this.greeting = 'Animal Shelter';
    this.animals = mainService.animals;

  }

})();
