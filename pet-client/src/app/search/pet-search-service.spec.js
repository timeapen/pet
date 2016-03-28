/**
 * Created by eapent on 3/28/2016.
 */
(function() {
  'use strict';

  describe('pet search service', function() {

    var petSearchService;
    var $httpBackend;

    beforeEach(module('petClient'));
    beforeEach(inject(function(_petSearchService_, _$httpBackend_) {
      petSearchService = _petSearchService_;
      $httpBackend = _$httpBackend_;
    }));

    it('pet search should be registered', function() {
      expect(petSearchService).not.toEqual(null);
    });

    it('pet search should return data', function() {
      var petId = 1;
      $httpBackend.when('GET', '/pet/' + petId).respond(200, {"name" : "Santo", "description" : "Baby"});

      var pet;
      petSearchService.search(petId)
        .then(function(data) {
          pet = data;
        });
      $httpBackend.flush();

      expect(pet).toEqual({"name" : "Santo", "description" : "Baby"});
    });

    it('pet search should log error', function() {
      var petId = 1;
      $httpBackend.when('GET', '/pet/' + petId).respond(500);

      var searchError;
      petSearchService.search(petId)
        .catch(function () {
          searchError = true;
        });
      $httpBackend.flush();

      expect(searchError).toBeTruthy();
    });

  });

})();
