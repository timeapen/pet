/**
 * Created by eapent on 4/3/2016.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var PetDeleteModal = function() {
  var title = element(by.id('title'));
  var deleteModalButton = element(by.id('deleteModalButton'));

  this.title = function() {
    return title.getText();
  }

  this.delete = function() {
    deleteModalButton.click();
  }

};

module.exports = new PetDeleteModal();

