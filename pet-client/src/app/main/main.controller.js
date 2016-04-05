(function() {
  'use strict';

  angular
    .module('petClient')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, loginService, $location, $log) {
    var vm = this;

    vm.creationDate = 1458950758345;
    vm.login = login;
    vm.credentialsPresent = credentialsPresent;
    vm.credentials = undefined;

    function login() {
      loginService.login(vm.credentials)
        .then(function(authenticated) {
          $log.info("Login succeeded: ", authenticated);
          $location.path("/add");
          vm.error = false;
      }).catch(function(authenticated) {
        $log.info("Login failed: ", authenticated)
        $location.path("/");
        vm.error = true;
      });
    }

    function credentialsPresent() {
     return vm.credentials && vm.credentials.username && vm.credentials.password;
    }
  }
})();
