(function() {
  'use strict';

  angular
    .module('petClient')
    .config(routeConfig);

  function routeConfig($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).when('/pets', {
        templateUrl: 'app/search/pet-search.html',
        controller: 'PetSearchController',
        controllerAs: 'petSearch'
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  }

})();
