class HomePage {
    get singUp() {
      return cy.get('.hero-descriptor_btn',{ timeout: 1000 });
    }
  
    get signIn() {
      return cy.get('.header_signin',{ timeout: 1000 });
    }
  }
  
  export default new HomePage();