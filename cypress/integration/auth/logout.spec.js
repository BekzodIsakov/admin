import '@testing-library/cypress/add-commands';
import '../../support'

context('Cypress.Logout', () => {
    beforeEach(() => {
        cy.log('Authorization pending');
        return cy.login().then(() => cy.visit('/dashboard'))
    });

    it('Logout', () => {
        cy.get('[data-testid="user-logout"]').click();
        cy.url().should('include', '/login');
    })
})