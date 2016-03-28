/**
 * Created by eapent on 3/27/2016.
 */
(function() {
  'use strict';

  angular
    .module('petClient')
    .controller('PetAddController', PetAddController);

  /** @ngInject */
  function PetAddController($log, $http) {
    var vm = this;
    vm.add = add;

    $log.info('Pets add!!!!');

    function add(name, description) {
      $log.info("Adding pet with name: ", name, " and description: ", description);
      var url = "/pet";
      $http.post(url, {"name": name, "description": description});
    }

    //function search(petId) {
    //  $log.info("Searching for pet with id: ", petId);
    //  var url = "/pet" + "/" + petId;
    //  $http.get(url)
    //    .then(function(response) {
    //      $log.info("Got pet: ", response);
    //    });
    //}

  }
})();
