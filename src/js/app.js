// sample angular code

(function() {

  'use strict';

  angular
    .module('animalsApp', [
      'ngRoute',
      'animalsApp.config',
      'animalsApp.components.main',
      'animalsApp.components.comment'
    ]);

})();
