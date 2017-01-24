// sample angular code

(function() {

  'use strict';

  angular
    .module('animalsApp', [
      'ui.router',
      'animalsApp.config',
      'animalsApp.components.main',
      'animalsApp.components.comment'
    ]);

})();
