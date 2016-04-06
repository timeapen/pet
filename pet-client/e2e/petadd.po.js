/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var PetAddPage = function() {
  var pageHeading = element(by.css('h1'));
  var name = element(by.id('name'));
  var description = element(by.id('description'));
  var add = element(by.id('add'));
  var addId = element(by.id('addId'));

  this.successMessage = element(by.id('addSuccess'));

  this.pageHeading = function() {
    return pageHeading.getText();
  }

  this.enterName = function(petName) {
    name.sendKeys(petName);
  }

  this.enterDescription = function(petDescription) {
    description.sendKeys(petDescription);
  }

  this.clickAddPet = function(name, description) {
    this.enterName(name);
    this.enterDescription(description);
    add.click();
  }

  this.addedPetId = function() {
    return addId.getText();
  }

};

module.exports = new PetAddPage();
