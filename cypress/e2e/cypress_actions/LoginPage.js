class LoginPage {
    get title() {
      return cy.contains('.modal-title','Log in');
    }

    get inputEmail() {
      return cy.get('[id=signinEmail]',{ timeout: 1000 });
    }
  
    typeEmail(email) {
      this.inputEmail.type(email);
      return this;
    }

    get inputPassword() {
      return cy.get('[id=signinPassword]',{ timeout: 1000 });
    }
  
    typePassword(password) {
      this.inputPassword.type(password, {sensitive: true})
      return this;
    }

    get loginButton() {
      return cy.xpath('//button[text()=\'Login\']',{ timeout: 1000 });
    }

    clickLogin(){
      this.loginButton.click();
      return this;
    }
    
  }
  
  export default new LoginPage();