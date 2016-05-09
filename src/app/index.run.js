(function() {
  'use strict';

  angular
    .module('fastWeb')
    .run(function ($log) {
      $log.log('FasT-web running');

      angular.element(document).foundation();
    })
  ;

})();
