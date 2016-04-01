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
      clearPrincipal: clearPrincipal,
      hasRole: hasRole
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

    function hasRole(role) {
      var authorities = vm.principal && vm.principal.authorities;
      for (var i = 0; authorities && i < authorities.length; i++) {
        if (authorities[i].authority === role) {
          return true;
        }
      }
      return false;
    }

    return service;
  }

})();
