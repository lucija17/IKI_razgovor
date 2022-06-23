import * as insertData from "../fixtures/data.json"

export function insert() {

    cy.get(insertData.newMessage).click({force:true});
    cy.get(insertData.newMessage).click({force:true});
    cy.visit(Cypress.env('url'));
    cy.get(insertData.recipient).clear().type(Cypress.env('Recipient'));
    cy.get(insertData.title).clear().type(Cypress.env('title'));
    const iframe = cy
        .get('#composebody_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

    iframe.clear().type('Ovo je rezultat automatiziranog testiranja!');
    cy.get(insertData.send).click();

}