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
    function NavbarController(moment, $rootScope, $location, $http, loginService, principalService) {
      var vm = this;

      refreshLogin();

      /*
       Handles the case where the browser is manually refreshed. Move this to the navbar, so the entire app has this.
       */
      function refreshLogin() {
        loginService.login(undefined, function(authenticated) {
          if (authenticated) {
            $rootScope.authenticated = true;
          } else {
            $rootScope.authenticated = false;
          }
        })
      }

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();

      vm.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };

      vm.logout = function() {
        $http.post('/signout  ', {}).finally(function() {
          $rootScope.authenticated = false;
          principalService.clearPrincipal();
          $location.path('/');
        });
      };

      vm.hasPrincipal = function() {
        return principalService.getPrincipal();
      }

    }
  }

})();
