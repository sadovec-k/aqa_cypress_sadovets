require("cypress-xpath")

// Створення аліасу для елементу
//cy.get('.login-button').as('loginButton');

describe('Test buttons on page https://qauto.forstudy.space/', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {auth: {
          username: 'guest',
          password: "welcome2qauto"
        }});
        
        cy.title().should('eq','Hillel Qauto');        
      });

    it('Check SignIn button', () => {
      cy.xpath('//button[@class=\'hero-descriptor_btn btn btn-primary\']',{ timeout: 1000 })
            .should('be.visible')
            .should('not.be.disabled');
    });
  
    it('Check Face book link', () => {
      cy.xpath('//span[@class=\'socials_icon icon icon-facebook\']',{ timeout: 1000 })
            .should('be.visible')
            .should('not.be.disabled');
    });

    it('Check telegram link', () => {
      cy.xpath('//span[@class=\'socials_icon icon icon-telegram\']',{ timeout: 1000 })
            .should('be.visible')
            .should('not.be.disabled');
    });

    it('Check youtube link', () => {
      cy.get('a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]',{ timeout: 1000 })
            .should('be.visible')
            .should('not.be.disabled');
    });

    it('Check instagram link', () => {
      cy.get('a[href="https://www.instagram.com/hillel_itschool/"]',{ timeout: 1000 })
            .should('be.visible')
            .should('not.be.disabled');
    });

    it('Check linkedlink link', () => {
      cy.get('a[href="https://www.linkedin.com/school/ithillel/"]',{ timeout: 1000 })
            .should('be.visible')
            .should('not.be.disabled');
    });

    it('Check ithillel.ua link', () => {
      cy.get('a[href="https://ithillel.ua"]',{ timeout: 1000 })
            .should('be.visible')
            .should('not.be.disabled');
    });

    it('Check email link', () => {
      cy.get('a[href="mailto:developer@ithillel.ua"]',{ timeout: 1000 })
            .should('be.visible')
            .should('not.be.disabled');
    });

    it('Check right button on footer', () => {
      cy.get('.footer_logo > svg',{ timeout: 1000 })
            .should('be.visible')
            .should('not.be.disabled');
    });
  });