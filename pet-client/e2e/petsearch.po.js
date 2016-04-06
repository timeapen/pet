/**
 * Created by eapent on 4/2/2016.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var PetSearchPage = function() {
  var pageHeading = element.all(by.css('h1')).first();
  var searchId = element(by.id('searchId'));
  var search = element(by.id('search'));
  var searchResultId = element(by.id('searchResultId'));
  var searchResultName = element(by.id('searchResultName'));
  var deleteButton = element(by.id('delete'));
  var deletePetAlert = element(by.id('deletePetAlert'));

  this.pageHeading = function() {
    return pageHeading.getText();
  }

  this.enterId = function(id) {
    searchId.sendKeys(id);
  }

  this.findPetById = function(id) {
    this.enterId(id);
    search.click();
  }

  this.searchResultName = function() {
    return searchResultName.getText();
  }

  this.searchResultId = function() {
    return searchResultId.getText();
  }

  this.delete = function() {
    deleteButton.click();
  }

  this.isDeleteVisible = function() {
    return deleteButton.isPresent();
  }


  this.deletePetAlert = function() {
    return deletePetAlert.getText();
  }

};

module.exports = new PetSearchPage();
