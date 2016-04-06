/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var LoginPage = function() {
  var usernameField = element(by.id('username'));
  var passwordField = element(by.id('password'));
  var loginButton = element(by.id('login'));
  var alert = element(by.id('loginAlert'));

  this.enterUsername = function(username) {
    usernameField.clear();
    usernameField.sendKeys(username);
  }

  this.enterPassword = function(password) {
    passwordField.clear();
    passwordField.sendKeys(password);
  }

  this.login = function(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    loginButton.click();
  }

  this.isLoginVisible = function() {
    return loginButton.isDisplayed();
  }

  this.loginAlert = function() {
    return alert.getText();
  }

};

module.exports = new LoginPage();
