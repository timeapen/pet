(function() {
  'use strict';

  describe('controllers', function(){
    var $controller;
    var vm;
    var loginService;

    beforeEach(module('petClient'));
    beforeEach(inject(function(_$controller_, _$rootScope_, _loginService_) {
      $controller = _$controller_;
      loginService = _loginService_;
    }));

    it('should login', function() {
      vm = $controller('MainController');

      spyOn(loginService, 'login').and.callThrough();
      vm.credentials = {"name" : "Sandhra", "password" : "Baby"};
      vm.login();

      expect(loginService.login).toHaveBeenCalledWith({"name" : "Sandhra", "password" : "Baby"});
    });

  });
})();
