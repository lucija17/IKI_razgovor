import {logIn} from "../support/login/login";
import {insert} from "../support/insertData";
import * as loginData from "../fixtures/login/login.json";


describe('send mail', () => {

   it('check url', () => {

       cy.visit(Cypress.env('BaseUrl'));
       cy.get(loginData.mailButton).should('have.attr', 'target', '_blank');
       cy.get(loginData.mailButton).should('have.attr', 'href', Cypress.env('webmail'));



   });

    it('login and send mail', () => {

        logIn();
        cy.url().should('eq', 'https://webmail.ffos.hr/?_task=mail&_mbox=INBOX');
        insert();
    });

});


