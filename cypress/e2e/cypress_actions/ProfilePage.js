class ProfilePage {
    get myProfile() {
      return cy.xpath('//button[@id="userNavDropdown"]').should('be.visible');
    } 

  }
  
  export default new ProfilePage();