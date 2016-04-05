(function() {
  'use strict';

  angular
    .module('petClient')
    .controller('PetSearchController', PetSearchController);

  /** @ngInject */
  function PetSearchController($log, $http, $modal, petSearchService, principalService) {
    var vm = this;
    vm.search = search;
    vm.hasRole = hasRole;
    vm.deletePet = deletePet;
    vm.pet = undefined;
    vm.deletePetSuccessful = false;
    vm.searchExecuted = false;

    $log.info('Initializing pet search controller!');

    function search(petId) {
      vm.searchExecuted = false;
      petSearchService.search(petId)
        .then(function (pet) {
          $log.info('Retrieved pet: ', pet);
          vm.pet = pet;
          vm.searchExecuted = true;
        });
    }

    function hasRole(role) {
      return principalService.hasRole(role);
    }

    function deletePet(petId) {
      $log.info("Deleting pet id: ", petId);
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/search/pet-delete-modal.html',
        controller: 'PetDeleteController',
        controllerAs: 'petDelete',
        size: 'lg',
        resolve: {
          pet: function () {
            return vm.pet;
          }
        }
      });

      modalInstance.result
        .then(function (deleted) {
            vm.deletePetSuccessful = deleted;
            if (deleted) {
              vm.pet = undefined;
              vm.searchExecuted = false;
            }
        }, function () {
            vm.deletePetSuccessful = false;
        });
    }

  }
})();
