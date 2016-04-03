/**
 * Created by eapent on 4/2/2016.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var PetSearchPage = function() {
  var searchId = element(by.id('searchId'));
  var search = element(by.id('search'));

  this.enterId = function(id) {
    searchId.sendKeys(id);
  }

  this.search = function() {
    search.click();
  }

};

module.exports = new PetSearchPage();
