/**
 * Created by eapent on 3/28/2016.
 */
(function() {
  'use strict';

  describe('Login service', function() {

    var loginService;
    var $httpBackend;

    beforeEach(module('petClient'));
    beforeEach(inject(function(_loginService_, _$httpBackend_) {
      loginService = _loginService_;
      $httpBackend = _$httpBackend_;
    }));

    it('login service should be registered', function() {
      expect(loginService).not.toBe(null);
    })

  });

})();
