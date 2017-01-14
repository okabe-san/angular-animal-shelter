(function() {

  'use strict';

  angular
    .module('animalsApp.components.main')
    .service('mainService', mainService);

  function mainService() {
    /*jshint validthis: true */
    this.animals = [{
        name: 'Angel',
        bio: 'Darkest Syn',
        image: 'http://cl.jroo.me/z1/S/_/v/e/a.daa-small-Cool-and-funny-kitten.jpg',
        like: 5,
        comments: [{
          comment: 'Angel - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }, {
          comment: 'Angel - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }]
      }, {
        name: 'Gentle',
        bio: 'Men',
        image: 'http://cdn.earthporm.com/wp-content/uploads/2014/07/unusual-animal-markings-34.jpg',
        like: 5,
        comments: [{
          comment: 'Gentle - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }]
      }];
  }

})();
