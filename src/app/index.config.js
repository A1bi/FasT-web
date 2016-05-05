(function() {
  'use strict';

  angular
    .module('fastWeb')
    .config(function ($logProvider) {
      $logProvider.debugEnabled(true);
    })
  ;

})();
