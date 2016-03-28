(function() {
  'use strict';

  angular
    .module('petClient')
    .controller('PetSearchController', PetSearchController);

  /** @ngInject */
  function PetSearchController($log, $http) {
    var vm = this;
    vm.search = search;

    $log.info('Pets search!!!!');

    $http.get("/pets")
      .then(function(response) {
        $log.info("Got pets: ", response);
      });

    function search(petId) {
      $log.info("Searching for pet with id: ", petId);
      var url = "/pet" + "/" + petId;
      $http.get(url)
        .then(function(response) {
          $log.info("Got pet: ", response);
        });
    }

  }
})();
