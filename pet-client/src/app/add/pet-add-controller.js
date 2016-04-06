/**
 * Created by eapent on 3/27/2016.
 */
(function() {
  'use strict';

  angular
    .module('petClient')
    .controller('PetAddController', PetAddController);

  /** @ngInject */
  function PetAddController($log, petAddService) {
    $log.info('Initializing the PetAddController.');

    var vm = this;
    vm.add = add;
    vm.id = undefined;
    vm.error = false;

    function add(name, description) {
      vm.id = undefined;
      petAddService.add(name, description)
        .then(function(id) {
          vm.id = id;
        }).catch(function(error) {
          $log.error('XHR Failed for PetAddService.add.\n' + angular.toJson(error.data, true));
          vm.error = true;
      });
    }
  }
})();
