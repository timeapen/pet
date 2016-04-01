/**
 * Created by eapent on 3/28/2016.
 */
(function () {
  'use strict';

  angular.module('petClient')
    .factory('loginService', loginService);

  function loginService($rootScope, $http, $log, principalService) {
    var service = {
      login: login
    };

    function login(credentials, callback) {
      authenticate(credentials, callback);
    }

    var authenticate = function (credentials, callback) {
      var headers = credentials ? {
        authorization: "Basic "
        + btoa(credentials.username + ":"
          + credentials.password)
      } : {};

      $http.get('/user', {
        headers: headers
      }).success(function (data) {
        if (data.name) {
          $rootScope.authenticated = true;
        } else {
          $rootScope.authenticated = false;
        }
        principalService.setPrincipal(data.principal);
        callback && callback($rootScope.authenticated);
      }).error(function() {
        $rootScope.authenticated = false;
        callback && callback(false);
      });
    }
    return service;
  }

})();
