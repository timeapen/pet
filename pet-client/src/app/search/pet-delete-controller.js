(function() {
  'use strict';

  angular
    .module('petClient')
    .controller('PetDeleteController', PetDeleteController);

  /** @ngInject */
  function PetDeleteController($log, $http, $modalInstance, pet, petSearchService) {
    var vm = this;
    vm.pet = pet;
    vm.deletePet = deletePet;
    vm.cancel = cancel;

    $log.info('Initializing pet delete modal controller with pet: ', vm.pet);

    function deletePet(petId) {
      $log.info("Deleting pet id: ", petId);
      var url = "/pet" + "/" + petId;
      $http.delete(url)
        .then(function () {
            $modalInstance.close(true);
          }
        ).catch(function (error) {
            $log.error('Error deleting pet: ', error);
            $modalInstance.close(false);
      });
    }

    function cancel() {
      $modalInstance.close(false);
    }

  }
})();
