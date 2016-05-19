(function() {
  'use strict';

  angular
    .module('fastWeb')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl($rootScope) {
    var vm = this;
    vm.stateName = 'home';
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      vm.stateName = toState.name;
    });
  }
})();
