/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var PetAddPage = function() {
  this.pageHeading = element(by.css('h1'));
  this.name = element(by.id('name'));
  this.description = element(by.id('description'));
  this.add = element(by.id('add'));
  this.successMessage = element(by.id('addSuccess'));

  this.enterName = function(name) {
    this.name.sendKeys(name);
  }

  this.enterDescription = function(description) {
    this.description.sendKeys(description);
  }

  this.clickAdd = function() {
    this.add.click();
  }

};

module.exports = new PetAddPage();
