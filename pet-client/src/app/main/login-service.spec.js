/**
 * Created by eapent on 3/28/2016.
 */
(function() {
  'use strict';

  describe('Login service', function() {

    var loginService;
    var principalService;
    var $httpBackend;

    beforeEach(module('petClient'));
    beforeEach(inject(function(_loginService_, _principalService_, _$httpBackend_) {
      loginService = _loginService_;
      principalService = _principalService_;
      $httpBackend = _$httpBackend_;
    }));

    it('login service should be registered', function() {
      expect(loginService).not.toBe(null);
    })

    it('login success', function() {
      $httpBackend.when('GET', '/user').respond(200, {"principal" : {"name" : "Sandhra"}});
      spyOn(principalService, 'setPrincipal');

      var credentials = {"name" : "Sandhra", "password" : "Baby"};

      loginService.login(credentials);

      $httpBackend.flush();

      expect(principalService.setPrincipal).toHaveBeenCalledWith({"name" : "Sandhra"});
    });

    it('login fail', function() {
      $httpBackend.when('GET', '/user').respond(500);
      spyOn(principalService, 'setPrincipal');

      var credentials = {"name" : "Sandhra", "password" : "Baby"};
      loginService.login(credentials);

      $httpBackend.flush();

      expect(principalService.setPrincipal).not.toHaveBeenCalledWith({"name" : "Sandhra"});
    })

  });

})();
