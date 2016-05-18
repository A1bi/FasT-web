(function() {
  'use strict';

  angular
    .module('fastWeb')
    .run(function ($log, $document) {
      $log.log('FasT-web running');

      Foundation.Dropdown.defaults.closeOnClick = true;
      $document.foundation();
    })
  ;

})();
