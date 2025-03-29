require("cypress-xpath");
import LoginPage from '../cypress_actions/LoginPage.js';
import HomePage from '../cypress_actions/HomePage.js';
import AddFuelPage from '../cypress_actions/AddFuelPage.js';
import '../../support/commands.js';
import AddCarPage from '../cypress_actions/AddCarPage.js';
import ProfilePage from '../cypress_actions/ProfilePage.js';


let newUserEmail = '';
const validCredentials = require('../../fixtures/cypress_actions_cred.json');


describe('Add car and fuel expenses', () => {
    beforeEach(() => {
        const url = Cypress.env('baseUrl');
        console.log(url);
        cy.visit(url, {auth: {
          username: validCredentials.name,
          password: validCredentials.password
        }});
        
        cy.title().should('eq','Hillel Qauto');   
        
        HomePage.signIn.click();
        cy.login(Cypress.env('email'),Cypress.env('password'));
        ProfilePage.myProfile.should('be.visible');
      });

    it('Add car and fuel expenses', () => {

        ProfilePage.addCar.click();
        AddCarPage.title.should('be.visible');
        AddCarPage.selectBrand.select('Ford');    
        AddCarPage.selectModel.select('Fiesta');
        AddCarPage.inputMileage.type('1000');
    
        AddCarPage.buttonAdd.click();
        
        ProfilePage.getItemByName.should('be.visible')
        .should('have.text', 'Ford Fiesta');

        ProfilePage.addFuelExpense.click();
        AddFuelPage.inputDate.clear();
        AddFuelPage.inputDate.type('28.03.2025');
        AddFuelPage.inputMileage.clear();
        AddFuelPage.inputMileage.type('1001');
        AddFuelPage.inputNumberOfLiters.type('10');
        AddFuelPage.inputTotalCoast.type('50');
        AddFuelPage.buttonAdd.click();

    });

});