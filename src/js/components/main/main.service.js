(function() {

  'use strict';

  angular
    .module('animalsApp.components.main')
    .service('mainService', mainService);

  function mainService() {
    /*jshint validthis: true */
    this.animals = [{
      name: 'Darkest',
      bio: 'Syn',
      image: 'http://cl.jroo.me/z1/S/_/v/e/a.daa-small-Cool-and-funny-kitten.jpg',
      comments: [{
        comment: 'Angel - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        comment: 'Angel - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }]
    }, {
      name: 'Fuzz',
      bio: 'Ball',
      image: 'http://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg',
      comments: [{
        comment: 'Angel - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        comment: 'Angel - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }]
    }, {
      name: 'Gentle',
      bio: 'Men',
      image: 'http://cdn.earthporm.com/wp-content/uploads/2014/07/unusual-animal-markings-34.jpg',
      comments: [{
        comment: 'Gentle - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }]
    }, {
      name: 'Angel',
      bio: 'Heart',
      image: 'http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/crop/0x0%2B0%2B0/resize/180x180/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2F56%2F7a0920b3ac11e092fe0050568d634f%2Ffile%2Fhub-dogs-senior.jpg',
      comments: [{
        comment: 'Gentle - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }]
    }, {
      name: 'Too',
      bio: 'Cute',
      image: 'https://s-media-cache-ak0.pinimg.com/736x/63/0f/0e/630f0ef3f6f3126ca11f19f4a9b85243.jpg',
      comments: [{
        comment: 'Gentle - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }]
    }, {
      name: 'Happy Happy',
      bio: 'Joy Joy',
      image: 'http://i271.photobucket.com/albums/jj149/savannah_gg/funny-dogs.jpg',
      comments: [{
        comment: 'Gentle - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }]
    }];
  }

})();
