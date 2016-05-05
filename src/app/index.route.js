(function() {
  'use strict';

  angular
    .module('fastWeb')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/home/home.html'
        })
      ;

      $urlRouterProvider.otherwise('/');
    })
  ;

})();
