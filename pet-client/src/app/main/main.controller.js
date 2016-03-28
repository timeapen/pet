(function() {
  'use strict';

  angular
    .module('petClient')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $location, $http, $log, $timeout, webDevTec, toastr) {
    var vm = this;

    vm.creationDate = 1458950758345;
    vm.login = login;

    var authenticate = function(credentials, callback) {

      var headers = vm.credentials ? {
        authorization : "Basic "
        + btoa(vm.credentials.username + ":"
          + vm.credentials.password)
      } : {};

      $http.get('/user', {
        headers : headers
      }).success(function(data) {
        if (data.name) {
          $rootScope.authenticated = true;
        } else {
          $rootScope.authenticated = false;
        }
        callback && callback($rootScope.authenticated);
      }).error(function() {
        $rootScope.authenticated = false;
        callback && callback(false);
      });

    }

    function login() {
      authenticate(self.credentials, function(authenticated) {
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
      })
    }

  }
})();
