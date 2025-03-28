class ProfilePage {
    get myProfile() {
      return cy.xpath('//button[@id="userNavDropdown"]',{ timeout: 1000 });
    } 

    get addCar() {
      return cy.xpath('//button[text()="Add car"]');
    } 

    get fuelExpenses() {
      return cy.get('a[href="/panel/expenses"]',{ timeout: 1000 });
    }   
    
    get getItemByName() {
      return cy.xpath('//div[@class="car jumbotron"]//p[@class="car_name h2"]',{ timeout: 1000 });
    }

    get addFuelExpense() {
      return cy.xpath('//button[text()="Add fuel expense"]');
    } 
  }
  
  export default new ProfilePage();