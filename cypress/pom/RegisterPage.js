class RegisterPage {
    get title() {
        return cy.contains('.modal-title','Registration',{ timeout: 1000 });
      }

    get close() {
        return cy.get('.close',{ timeout: 1000 });
    }  
    
    get lableName() {
        return cy.xpath('//label[text()=\'Name\']',{ timeout: 1000 });
    } 

    get inputName() {
        return cy.get('[id=signupName]',{ timeout: 1000 });
    } 

    get alertName() {
        return cy.xpath('//input[@id="signupName"]/following-sibling::div[@class="invalid-feedback"]',{ timeout: 1000 });
    } 

    get lableLastName() {
        return cy.xpath('//label[text()=\'Last name\']',{ timeout: 1000 });
    } 

    get inputLastName() {
        return cy.get('[id=signupLastName]',{ timeout: 1000 });
    } 

    get alertLastName() {
        return cy.xpath('//input[@id="signupLastName"]/following-sibling::div[@class="invalid-feedback"]',{ timeout: 1000 });
    } 

    get lableEmail() {
        return cy.xpath('//label[text()=\'Email\']',{ timeout: 1000 });
    } 

    get inputEmail() {
        return cy.get('[id=signupEmail]',{ timeout: 1000 });
    } 

    get alertEmail() {
        return cy.xpath('//input[@id="signupEmail"]/following-sibling::div[@class="invalid-feedback"]',{ timeout: 1000 });
    } 

    get lablePassword() {
        return cy.get('[for="signupPassword"]',{ timeout: 1000 });
    } 

    get inputPassword() {
        return cy.get('[id=signupPassword]',{ timeout: 1000 });
    } 

    get alertPassword() {
        return cy.xpath('//input[@id="signupPassword"]/following-sibling::div[@class="invalid-feedback"]',{ timeout: 1000 });
    } 

    get lableReEnterPassword() {
        return cy.get('[for="signupRepeatPassword"]',{ timeout: 1000 });
    } 

    get inputReEnterPassword() {
        return cy.get('[id=signupRepeatPassword]',{ timeout: 1000 });
    } 

    get alertReEnterPassword() {
        return cy.xpath('//input[@id="signupRepeatPassword"]/following-sibling::div[@class="invalid-feedback"]',{ timeout: 1000 });
    } 

    get btnRegister() {
        return cy.xpath('//button[text()=\'Register\']',{ timeout: 1000 });
    } 
  }
  
  export default new RegisterPage();