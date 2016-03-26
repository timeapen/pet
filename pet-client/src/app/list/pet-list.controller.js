(function() {
  'use strict';

  angular
    .module('petClient')
    .controller('PetListController', PetListController);

  /** @ngInject */
  function PetListController($log, $http) {
    //var vm = this;

    $log.info('Pets list!!!!');

    $http.get("/pets")
      .then(function(response) {
        $log.info("Got pets: ", response);
      });

  }
})();
