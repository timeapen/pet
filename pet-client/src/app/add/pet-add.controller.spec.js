/**
 * Created by eapent on 4/6/2016.
 */
(function() {
  'use strict';

  describe('controllers', function(){
    var $controller;
    var $rootScope;
    var $q;
    var vm;
    var petAddService;

    beforeEach(module('petClient'));
    beforeEach(inject(function(_$controller_, _$rootScope_, _$q_, _petAddService_) {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $q = _$q_;
      petAddService = _petAddService_;
    }));

    it('should add pet', function() {
      vm = $controller('PetAddController');

      spyOn(petAddService, 'add').and.callFake(function() {
        var deferred = $q.defer();
        deferred.resolve(1);
        return deferred.promise;
      });

      vm.add('Blackie', 'The doggie!');

      $rootScope.$digest();

      expect(petAddService.add).toHaveBeenCalledWith('Blackie', 'The doggie!');
      expect(vm.id).toEqual(1);
      expect(vm.error).toBeFalsy();
    });

    it('should fail to add pet', function() {
      vm = $controller('PetAddController');

      spyOn(petAddService, 'add').and.callFake(function() {
        var deferred = $q.defer();
        deferred.reject('System error');
        return deferred.promise;
      });

      vm.add('Blackie', 'The doggie!');

      $rootScope.$digest();

      expect(petAddService.add).toHaveBeenCalledWith('Blackie', 'The doggie!');
      expect(vm.id).toBeUndefined();
      expect(vm.error).toBeTruthy();

    });

  });
})();
