(function() {
  'use strict';

  angular
    .module('petClient')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $rootScope, $location, $http) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();

      vm.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };

      vm.logout = function() {
        $http.post('/signout  ', {}).finally(function() {
          $rootScope.authenticated = false;
          $location.path("/");
        });
      };

    }
  }

})();
