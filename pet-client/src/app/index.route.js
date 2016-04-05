(function() {
  'use strict';

  angular
    .module('petClient')
    .config(routeConfig)
    .run(routeChange);

  function routeChange($rootScope, $location, principalService) {
    var routeChangeCallback = $rootScope.$on("$routeChangeStart", function () {
      if (!principalService.getPrincipal()) {
        $location.path('/');
      }
    });
    $rootScope.$on('$destroy', routeChangeCallback)
  }

  function routeConfig($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).when('/add', {
        templateUrl: 'app/add/pet-add.html',
        controller: 'PetAddController',
        controllerAs: 'petAdd'
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
