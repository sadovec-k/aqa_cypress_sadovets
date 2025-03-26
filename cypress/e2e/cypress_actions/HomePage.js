class HomePage {
    get singUp() {
      return cy.get('.hero-descriptor_btn');
    }
  
    get signIn() {
      return cy.get('.header_signin');
    }
  }
  
  export default new HomePage();