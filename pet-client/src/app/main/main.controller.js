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
    vm.credentials = undefined;

    refreshLogin();

    /*
      Handles the case where the browser is manually refreshed. Move this to the navbar, so the entire app has this.
     */
    function refreshLogin() {
      loginService.login(undefined, function(authenticated) {
        if (authenticated) {
          $log.info("Login succeeded")
          $rootScope.authenticated = true;
        } else {
          $log.info("Login failed")
          $rootScope.authenticated = false;
        }
      })
    }

    function login() {
      loginService.login(vm.credentials, function(authenticated) {
        if (authenticated) {
          $log.info("Login succeeded")
          $location.path("/add");
          vm.error = false;
          $rootScope.authenticated = true;
        } else {
          $log.info("Login failed")
          $location.path("/");
          vm.error = true;
          $rootScope.authenticated = false;
        }
      });
    }
  }
})();
