/**
 * Created by eapent on 3/28/2016.
 */
(function() {
  'use strict';

  describe('Login service', function() {

    var loginService;
    var $httpBackend;
    var $rootScope;

    beforeEach(module('petClient'));
    beforeEach(inject(function(_loginService_, _$httpBackend_, _$rootScope_) {
      loginService = _loginService_;
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;
    }));

    it('login service should be registered', function() {
      expect(loginService).not.toBe(null);
    })

    it('login success', function() {
      $httpBackend.when('GET', '/user').respond(200, {"name" : "Sandhra"});

      var credentials = {"name" : "Sandhra", "password" : "Baby"};
      var authenticated = undefined;
        loginService.login(credentials, function(success) {
        authenticated = success;
      });

      $httpBackend.flush();

      expect(authenticated).toBeTruthy();
      expect($rootScope.authenticated).toBeTruthy();
    });

    it('login fail', function() {
      $httpBackend.when('GET', '/user').respond(500);

      var credentials = {"name" : "Sandhra", "password" : "Baby"};
      var authenticated = undefined;
      loginService.login(credentials, function(success) {
        authenticated = success;
      });

      $httpBackend.flush();

      expect(authenticated).toBeFalsy();
      expect($rootScope.authenticated).toBeFalsy();
    })

  });

})();
