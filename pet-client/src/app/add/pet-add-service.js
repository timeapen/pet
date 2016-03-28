/**
 * Created by eapent on 3/28/2016.
 */
(function() {
  'use strict';

  angular.module('petClient')
    .factory('petAddService', petAddService);

  function petAddService($http, $log){
    var service = {
      add: add
    };

    function add(name, description) {
      $log.info("Adding pet with name: ", name, " and description: ", description);
      var url = "/pet";
      return $http.post(url, {"name": name, "description": description})
        .then(getId)
    }

    function getId(response) {
      return response.data;
    }

    return service;
  }

})();
