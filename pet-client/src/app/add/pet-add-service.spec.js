/**
 * Created by eapent on 3/28/2016.
 */
(function() {
  'use strict';

  describe('Pet add service', function() {
    var petAddService;
    var $httpBackend;

    beforeEach(module('petClient'));
    beforeEach(inject(function(_petAddService_, _$httpBackend_) {
      petAddService = _petAddService_;
      $httpBackend = _$httpBackend_;
    }));

    it('pet add service should be registered', function() {
      expect(petAddService).not.toBe(null);
    });

    it('pet add service adds pet', function() {
      $httpBackend.when('POST', '/pet').respond(200, 1);

      var petId;
      petAddService.add("Santo", "Baby")
        .then(function(id) {
          petId = id;
        });
      $httpBackend.flush();

      expect(petId).toBe(1);
    });

  });

})();
