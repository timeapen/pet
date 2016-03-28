/**
 * Created by eapent on 3/28/2016.
 */
(function() {
  'use strict';

  describe('pet search service', function() {

    var petSearchService;
    var $httpBackend;
    var $log;

    beforeEach(module('petClient'));
    beforeEach(inject(function(_petSearchService_, _$httpBackend_, _$log_) {
      petSearchService = _petSearchService_;
      $httpBackend = _$httpBackend_;
      $log = _$log_;
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

      petSearchService.search(petId);
      $httpBackend.flush();

      expect($log.error.logs).toEqual(jasmine.stringMatching('XHR Failed for'));
    });

  });

})();
