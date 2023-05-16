// <reference types="cypress" />
import faker from 'faker';

describe('Test Inscription', () => {
    it('Inscription success', () => {
       cy.visit("https://preprod.backmarket.fr/fr-fr/register");
       cy.get('[data-qa="accept-cta"]').click();
       cy.get('[id="firstName"]').type("firstname");
       cy.get('[id="lastName"]').type("lastname");
       const random = faker.name.findName();
       cy.get('[id="signup-email"]').type(`${random}@mail.com`);
       cy.get('[id="signup-password"]').type("Password0");
       cy.get('div._2OVE0h6V')
        .click(); 
        cy.get('[data-qa="signup-submit-button"]').click();
        cy.wait(1000);
        cy.url().should('eq', 'https://preprod.backmarket.fr/fr-fr/dashboard/orders')
 
    });
    it('Inscription failed', () => {
        cy.visit("https://preprod.backmarket.fr/fr-fr/register");
        cy.get('[data-qa="accept-cta"]').click();
        cy.get('[id="firstName"]').type("firstname");
        cy.get('[id="lastName"]').type("lastname");
        cy.get('[id="signup-email"]').type("user2@mail.com");
        cy.get('[id="signup-password"]').type("Password0");
        cy.get('div._2OVE0h6V')
         .click(); 
        cy.get('[data-qa="signup-submit-button"]').click();

        cy.get('p.flex.items-baseline.mt-2.text-primary-light.peer-disabled\\:text-primary-disabled.body-2-light.\\!text-danger')
.should('be.visible')

     });
    it('Authentification', () => {
        cy.visit("https://preprod.backmarket.fr/fr-fr/register");
        cy.get('[data-qa="accept-cta"]').click();
        cy.get('[id="signin-email"]').type("user2@mail.com");
        cy.get('[id="signin-password"]').type("Password0");
        cy.get('[data-qa="signin-submit-button"]').click();
        cy.wait(100);
        cy.url().should('eq', 'https://preprod.backmarket.fr/fr-fr/dashboard/orders')
    })


     
});