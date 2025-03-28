class AddFuelPage {
    get title() {
      return cy.contains('.modal-title','Add an expense');
    }

    get close() {
        return cy.contains('.close');
      }
    
    get inputDate() {
        return cy.get('[id=addExpenseDate]',{ timeout: 1000 });
    }
    
    get inputMileage() {
        return cy.get('[id=addExpenseMileage]',{ timeout: 1000 });
    }

    get inputNumberOfLiters() {
        return cy.get('[id=addExpenseLiters]',{ timeout: 1000 });
    }

    get inputTotalCoast() {
        return cy.get('[id=addExpenseTotalCost]',{ timeout: 1000 });
    }

    get buttonAdd() {
        return cy.xpath('//button[text()=\'Add\']');
    }
  }
  
  export default new AddFuelPage();