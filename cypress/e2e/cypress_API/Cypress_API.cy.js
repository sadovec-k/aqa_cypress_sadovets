require("cypress-xpath");
import LoginPage from '../cypress_actions/LoginPage.js';
import HomePage from '../cypress_actions/HomePage.js';
import '../../support/commands.js';
import AddCarPage from '../cypress_actions/AddCarPage.js';
import ProfilePage from '../cypress_actions/ProfilePage.js';
import FuelExpensesPage from '../cypress_actions/FuelExpensesPage.js';



let createdCarId = '';
const validCredentials = require('../../fixtures/cypress_actions_cred.json');


describe('Add car', () => {
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

    it('Add car By UI', () => {

        ProfilePage.addCar.click();
        AddCarPage.title.should('be.visible');
        AddCarPage.selectBrand.select('Ford');    
        AddCarPage.selectModel.select('Fiesta');
        AddCarPage.inputMileage.type('1000');
    
        cy.intercept('POST', 'https://qauto.forstudy.space/api/cars').as('createCar');
    
        AddCarPage.buttonAdd.click();

        cy.wait('@createCar').then((interception) => {
            expect(interception.response.statusCode).to.eq(201);
            
            createdCarId = JSON.stringify(interception.response.body).replace(/.*\"id\":(\d+),.*/mg, "\$1");            
          
          });
    });

    it('Check added car by API', () => {
          cy.request('GET', 'https://qauto.forstudy.space/api/cars/').then((response) => {
            
            cy.log(`All cars: ${JSON.stringify(response.body)}`);
            const createdCar = JSON.stringify(response.body).replace(/.*({"id":313913.*}),.*/mg,"\$1");
            cy.log(`New car: ${createdCar}`);
            expect(createdCar).to.contains("\"brand\":\"Ford\"");
            expect(createdCar).to.contains("\"model\":\"Fiesta\"");
      });
    });

    it('Add expence by API', () => {
      cy.request({
        method: 'POST',
        url: 'https://qauto.forstudy.space/api/expenses/',
        body: {
          "carId": createdCarId,
          "reportedAt": "2025-03-30",
          "mileage": 10000,
          "liters": 100,
          "totalCost": 300,
          "forceMileage": false
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        
      });
    });

    it('Check added expens by UI', () => {

      ProfilePage.fuelExpenses.click();
      FuelExpensesPage.title.should('be.visible');
      FuelExpensesPage.carselector.should('be.visible')
      .should('have.text', 'Ford Fiesta');
      FuelExpensesPage.mileage.should('be.visible')
      .should('have.text', '10000');
      FuelExpensesPage.liters.should('be.visible')
      .should('have.text', '100L');
      FuelExpensesPage.cost.should('be.visible')
      .should('have.text', '300.00 USD');
      
    });
});