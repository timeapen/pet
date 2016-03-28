(function() {
  'use strict';

  angular
    .module('petClient')
    .controller('PetSearchController', PetSearchController);

  /** @ngInject */
  function PetSearchController($log, $http, petSearchService) {
    var vm = this;
    vm.search = search;
    vm.pet = undefined;

    $log.info('Initializing pet search controller!');

    function search(petId) {
      petSearchService.search(petId)
        .then(function (pet) {
          $log.info('Retrieved pet: ', pet);
          vm.pet = pet;
        });
    }

  }
})();
