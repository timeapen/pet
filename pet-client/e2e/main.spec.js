'use strict';

describe('The main view', function () {
  var menu;
  var loginPage;
  var addPage;
  var searchPage;
  var deleteModal;

  beforeEach(function () {
    menu = require('./nav.po');
    loginPage = require('./main.po');
    addPage = require('./petadd.po');
    searchPage = require('./petsearch.po');
    deleteModal = require('./deleteModal.po');
  });

  it('should fail login', function() {
    browser.get('/index.html');

    loginPage.login('bad', 'badder');

    expect(loginPage.loginAlert()).toBe('There was a problem logging in. Please try again.');
  });

  it('should login and forward to Add Pet page', function() {
    loginPage.login('santo', 'baby');

    expect(addPage.pageHeading()).toBe('Add Pet');
  });

  it('should add pet', function() {
    addPage.clickAddPet('Blackie', 'A german shepherd');

    expect(addPage.successMessage.getText()).toMatch(/Added pet with id: \d+/);
  });

  it('should search for pet', function() {
    var addedPetId = addPage.addedPetId();

    menu.goToSearchPage();
    expect(searchPage.pageHeading()).toBe('Pet Search');

    searchPage.findPetById(addedPetId);

    expect(searchPage.searchResultId()).toBe(addedPetId);
    expect(searchPage.searchResultName()).toBe('Blackie');
  });

  it('should delete pet', function() {
    searchPage.delete();
    expect(deleteModal.title()).toBe('Are you sure you want to delete Blackie?');

    deleteModal.delete();
    expect(searchPage.deletePetAlert()).toBe('Pet has been deleted.');
  });

  it('should logout', function() {
    menu.logout();
    expect(loginPage.isLoginVisible()).toBeTruthy();
  });

  it('should user not be able to delete pet', function() {
    loginPage.login('tim', 'ollie');
    expect(addPage.pageHeading()).toBe('Add Pet');

    addPage.clickAddPet('Snoopy', 'A black and white beagle');
    expect(addPage.successMessage.getText()).toMatch(/Added pet with id: \d+/);

    var addedPetId = addPage.addedPetId();
    menu.goToSearchPage();
    expect(searchPage.pageHeading()).toBe('Pet Search');

    searchPage.findPetById(addedPetId);
    expect(searchPage.searchResultId()).toBe(addedPetId);
    expect(searchPage.searchResultName()).toBe('Snoopy');
    expect(searchPage.isDeleteVisible()).toBeFalsy();

    menu.logout();
    expect(loginPage.isLoginVisible()).toBeTruthy();

    loginPage.login('ninu', 'varghese');
    expect(addPage.pageHeading()).toBe('Add Pet');

    menu.goToSearchPage();
    expect(searchPage.pageHeading()).toBe('Pet Search');

    searchPage.findPetById(addedPetId);
    expect(searchPage.searchResultId()).toBe(addedPetId);
    expect(searchPage.searchResultName()).toBe('Snoopy');
    expect(searchPage.isDeleteVisible()).toBeFalsy();

    menu.logout();
    expect(loginPage.isLoginVisible()).toBeTruthy();

    loginPage.login('santo', 'baby');
    expect(addPage.pageHeading()).toBe('Add Pet');

    menu.goToSearchPage();
    expect(searchPage.pageHeading()).toBe('Pet Search');

    searchPage.findPetById(addedPetId);
    expect(searchPage.searchResultId()).toBe(addedPetId);
    expect(searchPage.searchResultName()).toBe('Snoopy');
    expect(searchPage.isDeleteVisible()).toBeTruthy();

    searchPage.delete();
    expect(deleteModal.title()).toBe('Are you sure you want to delete Snoopy?');

    deleteModal.delete();
    expect(searchPage.deletePetAlert()).toBe('Pet has been deleted.');

    menu.logout();
    expect(loginPage.isLoginVisible()).toBeTruthy();
  });

  //it('should include jumbotron with correct data', function() {
  //  expect(page.h1El.getText()).toBe('\'Allo, \'Allo!');
  //  expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
  //  expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  //});
  //
  //it('should list more than 5 awesome things', function () {
  //  expect(page.thumbnailEls.count()).toBeGreaterThan(5);
  //});

});
