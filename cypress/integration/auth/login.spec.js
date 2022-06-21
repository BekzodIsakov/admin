import '@testing-library/cypress/add-commands';
import { config } from '../../../src/config';
const AUTH_NUMBER = '901142389'
const STATIC_MESSAGE_CODE = '321123'
const TEST_USER_NAME = 'Abutech'

context('Cypress.Auth', () => {
  beforeEach(() => {
    cy.visit({
      url: '/',
      method: 'GET'
    });

    cy.log('Visited home page');

    cy.url().should('include', '/login');
  });
  
  it('Login page auth', () => {
    cy.intercept({
      method: 'POST',
      url: `${config.apiUrl}/v1/auth/otp/generate/student`
    }).as('sendCodeRequest');

    cy.intercept({
      method: 'POST',
      url: `${config.apiUrl}/v1/auth/otp/confirm/student`
    }).as('confirmRequest');

    cy.intercept({
      method: 'POST',
      url: `${config.apiUrl}/v1/auth/register/student`
    }).as('registerRequest');

    cy.get('[data-cy="input.phone"]').type(AUTH_NUMBER);

    cy.log('Type test phone');

    cy.get('[data-cy="button.submit"]').click();

    cy.wait('@sendCodeRequest').then(({ response }) => {
      cy.get('[data-cy="input.code"]').type(STATIC_MESSAGE_CODE);
      cy.log('Type message code');

      if (!response.body.user_found) {
        cy.get('[data-cy="input.name"]').type(TEST_USER_NAME);
        cy.log('Type user name');
      }

      cy.get('[data-cy="button.submit"]').click();

      cy.wait(
        response.body.user_found ? '@confirmRequest' : '@registerRequest'
      ).then(() => {
        cy.url().should('include', '/dashboard');
      });
    });
  });
});
