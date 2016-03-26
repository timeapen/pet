(function() {
  'use strict';

  angular
    .module('petClient')
    .controller('PetListController', PetListController);

  /** @ngInject */
  function PetListController($log) {
    var vm = this;

    $log.info('Pets list!!!!');

  }
})();
