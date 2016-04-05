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

    function login(credentials) {
      return authenticate(credentials);
    }

    var authenticate = function (credentials) {
      var headers = credentials ? {
        authorization: "Basic "
        + btoa(credentials.username + ":"
          + credentials.password)
      } : {};

      return $http.get('/user', {
        headers: headers
      }).success(function (data) {
        principalService.setPrincipal(data.principal);
      });
    }
    return service;
  }

})();
