const assert = require('assert');
import LoginPage from '../pageobjects/LoginPage';
import MoviesPage from '../pageobjects/MoviesPage';

describe('First Test Group', () => {

  beforeEach(function(){
    LoginPage.open();
    browser.maximizeWindow();
  });

  it('gets the title of OMDB toppage', () => {
    const title = browser.getTitle();
    console.log("Title of homepage :" + title);
    expect(title).toEqual("React App");
  })

  it('enters wrong username and password', () => {
    LoginPage.username.setValue('jperez');
    LoginPage.password.setValue('Password1234!');
    LoginPage.clickLogin();
    const errorMsg = LoginPage.getErrorMessage();
    console.log(errorMsg);
    expect(errorMsg).toContain('Something went wrong');
  })

  it('register new user', () => {
    const usrUnique = Math.floor(Date.now() / 1000)
    console.log(usrUnique);
    LoginPage.register();
    LoginPage.username.setValue('jorge.perez'+usrUnique);
    LoginPage.password.setValue('Pass1234');
    LoginPage.signup();
    browser.pause(3000);
    const successMsg = MoviesPage.getSuccessMsg();
    console.log(successMsg);
    expect(successMsg).toContain("You successfully registered! Welcome!");
  })
  
})
