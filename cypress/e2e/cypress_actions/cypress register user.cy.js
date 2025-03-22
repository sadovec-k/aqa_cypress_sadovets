require("cypress-xpath")
import LoginPage from './LoginPage.js';
import RegisterPage from './RegisterPage.js';
import HomePage from './HomePage.js';
import ProfilePage from './ProfilePage.js';
import * as Utils from './Utils.js';
import '../../support/commands.js';

let newUserEmail = '';
const validCredentials = require('../../fixtures/cypress_actions_cred.json');

describe('Check UI Login Form on page https://qauto.forstudy.space/', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {auth: {
          username: validCredentials.name,
          password: validCredentials.password
        }});
        
        cy.title().should('eq','Hillel Qauto');        
      });

    it('Check Login button on Home Page', () => {
        HomePage.signIn.click();
        LoginPage.title
        .should('be.visible')
        .should('not.be.disabled');
    });

    it('Check Register button on Home Page', () => {
        HomePage.singUp.click();
        RegisterPage.title
        .should('be.visible')
        .should('not.be.disabled');
    });

});

  describe('Check Registration page', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {auth: {
          username: validCredentials.name,
          password: validCredentials.password
        }});
        
        cy.title().should('eq','Hillel Qauto');    
        
        HomePage.singUp.click();
        RegisterPage.title
        .should('be.visible')
        .should('not.be.disabled');
      });

    it('Check UI on Registration Page', () => {
      RegisterPage.title.should('be.visible').should('not.be.disabled');
      RegisterPage.close.should('be.visible').should('not.be.disabled');

      RegisterPage.lableName.should('be.visible').should('not.be.disabled')
      .should('have.text', 'Name');;
      RegisterPage.inputName.should('be.visible').should('not.be.disabled')
      .should('have.css', 'color', 'rgb(73, 80, 87)').should('have.text', '');
      RegisterPage.alertName.should('not.exist');

      RegisterPage.lableLastName.should('be.visible').should('not.be.disabled')
      .should('have.text', 'Last name');
      RegisterPage.inputLastName.should('be.visible').should('not.be.disabled')      
      .should('have.css', 'color', 'rgb(73, 80, 87)').should('have.text', '');
      RegisterPage.alertLastName.should('not.exist');

      RegisterPage.lableEmail.should('be.visible').should('not.be.disabled')
      .should('have.text', 'Email');
      RegisterPage.inputEmail.should('be.visible').should('not.be.disabled')
      .should('have.css', 'color', 'rgb(73, 80, 87)').should('have.text', '');
      RegisterPage.alertEmail.should('not.exist');

      RegisterPage.lablePassword.should('be.visible').should('not.be.disabled')
      .should('have.text', 'Password');
      RegisterPage.inputPassword.should('be.visible').should('not.be.disabled')
      .should('have.css', 'color', 'rgb(73, 80, 87)').should('have.text', '');
      RegisterPage.alertPassword.should('not.exist');

      RegisterPage.lableReEnterPassword.should('be.visible').should('not.be.disabled')
      .should('have.text', 'Re-enter password');
      RegisterPage.inputReEnterPassword.should('be.visible').should('not.be.disabled')
      .should('have.css', 'color', 'rgb(73, 80, 87)').should('have.text', '');
      RegisterPage.alertReEnterPassword.should('not.exist');

      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });
  });

  describe('Registration page negative tests', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {auth: {
          username: validCredentials.name,
          password: validCredentials.password
        }});
        
        cy.title().should('eq','Hillel Qauto');     
        HomePage.singUp.click();
        RegisterPage.title
        .should('be.visible')
        .should('not.be.disabled');   
      });

    //Field Name
    it('Field Name empty fuild', () => {
      RegisterPage.inputName.click();
      RegisterPage.inputLastName.click();
      RegisterPage.inputName.should('have.text', '')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertName.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.NAME_REQUIRED);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Name value is incorrect(numbers)', () => {
      RegisterPage.inputName.type(Utils.ErrorData.NUMBERS);
      RegisterPage.inputLastName.click();
      RegisterPage.inputName
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertName.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.INVALID_NAME);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Name value is incorrect(space)', () => {
      RegisterPage.inputName.type(Utils.ErrorData.SPACE);
      RegisterPage.inputLastName.click();
      RegisterPage.inputName
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertName.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.INVALID_NAME);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Name value is incorrect(special symbol)', () => {
      RegisterPage.inputName.type(Utils.ErrorData.SPECIAL_SYMBOL);
      RegisterPage.inputLastName.click();
      RegisterPage.inputName
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertName.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.INVALID_NAME);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Name value is incorrect(Not english symbol)', () => {
      RegisterPage.inputName.type(Utils.ErrorData.KIRILYK_SYMBOL);
      RegisterPage.inputLastName.click();
      RegisterPage.inputName
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertName.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.INVALID_NAME);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Name value is shorter than 2 ch', () => {
      RegisterPage.inputName.type(Utils.ErrorData.TO_SHORT_NAME);
      RegisterPage.inputLastName.click();
      RegisterPage.inputName
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertName.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.INVALID_LENGTH);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Name value is longer than 20 ch', () => {
      RegisterPage.inputName.type(Utils.ErrorData.TO_LONG_NAME);
      RegisterPage.inputLastName.click();
      RegisterPage.inputName
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertName.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.INVALID_LENGTH);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Name value has invalid type and length', () => {
      RegisterPage.inputName.type(Utils.ErrorData.ONE_NUMBER);
      RegisterPage.inputLastName.click();
      RegisterPage.inputName
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertName.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.INVALID_NAME_AND_LENGTH);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    //Field Last Name
    it('Last name value is incorrect(numbers)', () => {
      RegisterPage.inputLastName.type(Utils.ErrorData.NUMBERS);
      RegisterPage.inputName.click();
      RegisterPage.inputLastName
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertLastName.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.INVALID_LAST_NAME);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Last name value is incorrect(space)', () => {
      RegisterPage.inputLastName.type(Utils.ErrorData.SPACE);
      RegisterPage.inputName.click();
      RegisterPage.inputLastName
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertLastName.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.INVALID_LAST_NAME);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Last name value is incorrect(special symbol)', () => {
      RegisterPage.inputLastName.type(Utils.ErrorData.SPECIAL_SYMBOL);
      RegisterPage.inputName.click();
      RegisterPage.inputLastName
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertLastName.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.INVALID_LAST_NAME);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Last name value is incorrect(Not english symbol)', () => {
      RegisterPage.inputLastName.type(Utils.ErrorData.KIRILYK_SYMBOL);
      RegisterPage.inputName.click();
      RegisterPage.inputLastName
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertLastName.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.INVALID_LAST_NAME);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Last name value is shorter than 2 ch', () => {
      RegisterPage.inputLastName.type(Utils.ErrorData.TO_SHORT_NAME);
      RegisterPage.inputName.click();
      RegisterPage.inputLastName
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertLastName.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.INVALID_LASTNAME_LENGTH);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Last name value is longer than 20 ch', () => {
      RegisterPage.inputLastName.type(Utils.ErrorData.TO_LONG_NAME);
      RegisterPage.inputName.click();
      RegisterPage.inputLastName
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertLastName.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.INVALID_LASTNAME_LENGTH);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Last name value has invalid type and length', () => {
      RegisterPage.inputLastName.type(Utils.ErrorData.ONE_NUMBER);
      RegisterPage.inputName.click();
      RegisterPage.inputLastName
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertLastName.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.INVALID_LASTNAME_AND_LENGTH);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Field Last name empty fuild', () => {
      RegisterPage.inputLastName.click();
      RegisterPage.inputName.click();      
      RegisterPage.inputLastName.should('have.text', '')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertLastName.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.LAST_NAME_REQUIRED);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    //Field Email
    it('Email field is empty', () => {
      RegisterPage.inputEmail.click();
      RegisterPage.inputName.click();
      RegisterPage.inputEmail
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertEmail.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.EMAIL_REQUIRED);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Email field incorrect data', () => {
      RegisterPage.inputEmail.type(Utils.ErrorData.WRONG_EMAIL);
      RegisterPage.inputName.click();
      RegisterPage.inputEmail
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertEmail.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.EMAIL_INCORRECT);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    //Field Password
    it('Password field is empty', () => {
      RegisterPage.inputPassword.click();
      RegisterPage.inputName.click();
      RegisterPage.inputPassword
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertPassword.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.PASS_REQUIRED);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Password to short', () => {
      RegisterPage.inputPassword.type(Utils.ErrorData.TO_SHORT_PASS);
      RegisterPage.inputName.click();
      RegisterPage.inputPassword
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertPassword.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.PASS_ERROR);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Password to long', () => {
      RegisterPage.inputPassword.type(Utils.ErrorData.TO_LONG_NAME);
      RegisterPage.inputName.click();
      RegisterPage.inputPassword
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertPassword.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.PASS_ERROR);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Password hasn\'t numbers', () => {
      RegisterPage.inputPassword.type(Utils.ErrorData.PASS_ABSENT_NUMBERS);
      RegisterPage.inputName.click();
      RegisterPage.inputPassword
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertPassword.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.PASS_ERROR);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Password hasn\'t capital letter', () => {
      RegisterPage.inputPassword.type(Utils.ErrorData.PASS_ABSENT_CAPITAL_LETTER);
      RegisterPage.inputName.click();
      RegisterPage.inputPassword
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertPassword.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.PASS_ERROR);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Password hasn\'t usual letter', () => {
      RegisterPage.inputPassword.type(Utils.ErrorData.PASS_ONLY_CAPITAL_LETTERS);
      RegisterPage.inputName.click();
      RegisterPage.inputPassword
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertPassword.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.PASS_ERROR);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    //Field Re-enter Password
    it('Re-enter Password field is empty', () => {
      RegisterPage.inputReEnterPassword.click();
      RegisterPage.inputName.click();
      RegisterPage.inputReEnterPassword
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertReEnterPassword.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.PASS_RE_ENTER_REQUIRED);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Re-enter Password to short', () => {
      RegisterPage.inputReEnterPassword.type(Utils.ErrorData.TO_SHORT_PASS);
      RegisterPage.inputName.click();
      RegisterPage.inputReEnterPassword
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertReEnterPassword.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.PASS_ERROR);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Re-enter Password to long', () => {
      RegisterPage.inputReEnterPassword.type(Utils.ErrorData.TO_LONG_NAME);
      RegisterPage.inputName.click();
      RegisterPage.inputReEnterPassword
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertReEnterPassword.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.PASS_ERROR);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Re-enter Password hasn\'t numbers', () => {
      RegisterPage.inputReEnterPassword.type(Utils.ErrorData.PASS_ABSENT_NUMBERS);
      RegisterPage.inputName.click();
      RegisterPage.inputReEnterPassword
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertReEnterPassword.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.PASS_ERROR);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Re-enter Password hasn\'t capital letter', () => {
      RegisterPage.inputReEnterPassword.type(Utils.ErrorData.PASS_ABSENT_CAPITAL_LETTER);
      RegisterPage.inputName.click();
      RegisterPage.inputReEnterPassword
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertReEnterPassword.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.PASS_ERROR);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Re-enter Password hasn\'t usual letter', () => {
      RegisterPage.inputReEnterPassword.type(Utils.ErrorData.PASS_ONLY_CAPITAL_LETTERS);
      RegisterPage.inputName.click();
      RegisterPage.inputReEnterPassword
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertReEnterPassword.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.PASS_ERROR);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    //Check matching of password
    it('Check matching in the Re-enter Password filed', () => {
      RegisterPage.inputPassword.type(Utils.CorrectData.PASSWORD);
      RegisterPage.inputReEnterPassword.type(Utils.CorrectData.PASSWORD_2);
      RegisterPage.inputName.click();
      RegisterPage.inputPassword
      .should('have.css', 'border-color', 'rgb(206, 212, 218)');
      RegisterPage.inputReEnterPassword
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertReEnterPassword.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.PASS_DONT_MATCH);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

    it('Check matching in the Password filed', () => {
      RegisterPage.inputReEnterPassword.type(Utils.CorrectData.PASSWORD_2);
      RegisterPage.inputPassword.click();
      RegisterPage.alertReEnterPassword.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.PASS_DONT_MATCH);

      RegisterPage.inputPassword.type(Utils.CorrectData.PASSWORD);
      RegisterPage.inputName.click();
      RegisterPage.inputPassword
      .should('have.css', 'border-color', 'rgb(206, 212, 218)');
      RegisterPage.inputReEnterPassword
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      RegisterPage.alertReEnterPassword.should('exist')
      .should('have.css', 'color', 'rgb(220, 53, 69)')
      .should('have.text', Utils.Errors.PASS_DONT_MATCH);
      RegisterPage.btnRegister.should('be.visible').should('be.disabled')
      .should('have.text', 'Register');
    });

});

describe('Check UI Login Form on page https://qauto.forstudy.space/', () => {
  beforeEach(() => {
      cy.visit('https://qauto.forstudy.space/', {auth: {
        username: validCredentials.name,
        password: validCredentials.password
      }});
      
      cy.title().should('eq','Hillel Qauto');        
    });

  it('Check Login button on Home Page', () => {
      HomePage.signIn.click();
      LoginPage.title
      .should('be.visible')
      .should('not.be.disabled');
  });

  it('Check Register button on Home Page', () => {
      HomePage.singUp.click();
      RegisterPage.title
      .should('be.visible')
      .should('not.be.disabled');
  });

});

describe('Register user and Login', () => {
  beforeEach(() => {    
      cy.visit('https://qauto.forstudy.space/', {auth: {
        username: validCredentials.name,
        password: validCredentials.password
      }});
      
      cy.title().should('eq','Hillel Qauto');    
    });

  it('Register user sucessfully', () => {
    newUserEmail = Utils.getEmail();

    HomePage.singUp.click();
    RegisterPage.title
      .should('be.visible')
      .should('not.be.disabled');    

    RegisterPage.inputName.type(Utils.CorrectData.NAME);
    RegisterPage.inputLastName.type(Utils.CorrectData.LAST_NAME);
    RegisterPage.inputEmail.type(newUserEmail);
    RegisterPage.inputPassword.type(Utils.CorrectData.PASSWORD);
    RegisterPage.inputReEnterPassword.type(Utils.CorrectData.PASSWORD);
    RegisterPage.btnRegister.click();

    ProfilePage.myProfile.should('be.visible');
  });
  
  it('Login user sucessfully', () => {
    HomePage.signIn.click();
    LoginPage.title
      .should('be.visible')
      .should('not.be.disabled');        

    cy.login(newUserEmail,Utils.CorrectData.PASSWORD);

    ProfilePage.myProfile.should('be.visible');
  });
});

