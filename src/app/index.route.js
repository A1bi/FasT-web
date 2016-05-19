(function() {
  'use strict';

  angular
    .module('fastWeb')
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/home/home.html'
        })
        .state('theater', {
          url: '/theater',
          abstract: true,
          template: '<ui-view />'
        })
        .state('theater.alteDame', {
          url: '/der-besuch-der-alten-dame',
          templateUrl: 'app/theater/alte_dame/alte_dame.html'
        })
      ;

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    })
  ;

})();
