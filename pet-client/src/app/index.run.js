(function() {
  'use strict';

  angular
    .module('petClient')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $location, $log, loginService, principalService) {
    var routeChangeCallback = $rootScope.$on("$routeChangeStart", function () {
      if (!principalService.getPrincipal()) {
        $log.info('Attempting to login.');
        loginService.login().then(function() {
          if (!principalService.getPrincipal()) {
            $location.path('/');
          }
        });
      }
    });
    $rootScope.$on('$destroy', routeChangeCallback);

    $log.debug('runBlock end');
  }

})();
