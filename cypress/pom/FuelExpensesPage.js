class FuelExpensesPage {

    get title() {
      return cy.xpath('//h1[text()=\'Fuel expenses\']',{ timeout: 5000 });
    }

    get carselector() {
        return cy.get('[id=carSelectDropdown]',{ timeout: 1000 });td:nth-child(2)
    }

    get mileage() {
        return cy.get('td:nth-child(2)',{ timeout: 1000 });
    }

    get liters() {
        return cy.get('td:nth-child(3)',{ timeout: 1000 });
    }
    
    get cost() {
        return cy.get('td:nth-child(4)',{ timeout: 1000 });
    }

  }
  
  export default new FuelExpensesPage();