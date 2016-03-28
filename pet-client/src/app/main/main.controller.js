(function() {
  'use strict';

  angular
    .module('petClient')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $location, $http, $log, $timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1458950758345;
    vm.showToastr = showToastr;
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
          self.error = false;
          $rootScope.authenticated = true;
        } else {
          $log.info("Login failed")
          $location.path("/");
          self.error = true;
          $rootScope.authenticated = false;
        }
      })
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

  }
})();
