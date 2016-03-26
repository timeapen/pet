(function() {
  'use strict';

  angular
    .module('petClient')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).when('/pets', {
        templateUrl: 'app/list/pet-list.html'/*,
        controller: 'PetListController',
        controllerAs: 'petList'*/
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
