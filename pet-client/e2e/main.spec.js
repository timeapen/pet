'use strict';

describe('The main view', function () {
  var navBar;
  var page;
  var addPage;
  var searchPage;

  beforeEach(function () {
    navBar = require('./nav.po');
    page = require('./main.po');
    addPage = require('./petadd.po');
    searchPage = require('./petsearch.po');
  });

  it('should login and forward to Add Pet page', function() {
    browser.get('/index.html');
    page.username.sendKeys('santo');
    page.password.sendKeys('baby');
    page.login.click();

    expect(addPage.pageHeading.getText()).toBe('Add Pet');
  });

  it('should add pet', function() {
    addPage.enterName('Blackie');
    addPage.enterDescription('A german shepherd');
    addPage.clickAdd();

    expect(addPage.successMessage.getText()).toMatch(/Added pet with id: \d+/);
  });

  it('should search for pet', function() {
    navBar.goToSearchPage();
    searchPage.enterId(3);
    searchPage.search();
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
