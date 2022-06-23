import * as loginData from "../../fixtures/login/login.json";

export function logIn() {

    cy.visit(Cypress.env('webmail'));
    cy.get(loginData.usernameInput).clear().type(Cypress.env('UserName'));
    cy.get(loginData.passwordInput).clear().type(Cypress.env('Password'));
    cy.get(loginData.submitButton).click();
}