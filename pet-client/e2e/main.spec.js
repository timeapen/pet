'use strict';

describe('The main view', function () {
  var page;
  var petAdd;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
    petAdd = require('./petadd.po');
  });

  it('should login and forward to Add Pet page', function() {
    page.username.sendKeys('santo');
    page.password.sendKeys('baby');
    page.login.click();
    expect(petAdd.pageHeading.getText()).toBe('Add Pet');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h1El.getText()).toBe('\'Allo, \'Allo!');
    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
    expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  });

  it('should list more than 5 awesome things', function () {
    expect(page.thumbnailEls.count()).toBeGreaterThan(5);
  });

});
