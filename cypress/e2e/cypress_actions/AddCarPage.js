class AddCarPage {
    get title() {
      return cy.contains('.modal-title','Add a car');
    }

    get close() {
        return cy.get('.close',{ timeout: 1000 });
    } 

    get selectBrand() {
      return cy.get('[id=addCarBrand]');
    }

    get selectBrandFromList(){
       return cy.get('select#addCarBrand');
    }

    selectBrandFromList(brand) {
        this.selectBrandFromList().select(brand);
        return this;
    }
        
    get selectModel() {
        return cy.get('[id=addCarModel]');
    }

    get selectModelFromList(){
        return cy.get('select#addCarModel');
    }

    selectModelFromList(model) {
        this.selectModelFromList().select(model);
        return this;
    }

    get inputMileage() {
        return cy.get('[id=addCarMileage]',{ timeout: 1000 });
    }

    get buttonAdd() {
        return cy.xpath('//button[text()=\'Add\']'); 
    }

    get buttonCancel() {
        return cy.xpath('//button[text()=\'Cancel\']',{ timeout: 1000 }); 
    }
    
  }
  
  export default new AddCarPage();