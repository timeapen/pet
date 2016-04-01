/**
 * Created by eapent on 3/28/2016.
 */
(function () {
  'use strict';

  angular.module('petClient')
    .factory('principalService', principalService);

  function principalService($log) {
    var vm = this;

    vm.principal = undefined;

    var service = {
      setPrincipal: setPrincipal,
      getPrincipal: getPrincipal,
      clearPrincipal: clearPrincipal
    };

    function setPrincipal(principal) {
      $log.info('Setting principal: ', principal);
      vm.principal = principal;
    }

    function getPrincipal() {
      $log.info('Getting principal: ', vm.principal);
      return vm.principal;
    }

    function clearPrincipal() {
      $log.info('Clearing principal: ');
      vm.principal = undefined;
    }

    return service;
  }

})();
