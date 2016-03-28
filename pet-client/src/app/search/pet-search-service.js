(function() {

  'use strict';

  angular
    .module('petClient')
    .factory('petSearchService', petSearchService);

  /** @ngInject */
  function petSearchService($http, $log) {

    var service = {
      search: search
    };

    return service;

    function search(petId) {
      $log.info("Searching for pet with id: ", petId);
      var url = "/pet" + "/" + petId;
      return $http.get(url)
                  .then(getPet)
                  .catch(searchError);
    }

    function getPet(response) {
      $log.info
      return response.data;
    }

    function searchError(error) {
      $log.error('XHR Failed for getPet.\n' + angular.toJson(error.data, true));
    }

  }

})();
