(function() {
  'use strict';

  angular
    .module('petClient')
    .controller('PetDeleteController', PetDeleteController);

  /** @ngInject */
  function PetDeleteController($log, $http, petId, petSearchService) {
    var vm = this;
    vm.deletePet = deletePet;
    vm.petId = petId;

    $log.info('Initializing pet delete modal controller!');

    function deletePet(petId) {
      $log.info("Deleting pet id: ", petId);
      var url = "/pet" + "/" + petId;
      return $http.delete(url);
    }

  }
})();
