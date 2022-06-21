import '@testing-library/cypress/add-commands'
import '../../support'
import { config } from '../../../src/config';

context('Cypress.Dashboard.Welcome', () => {
    beforeEach(() => {
        cy.log('Authorization pending');
        cy.login()
          .then(() => {
            cy.log('Authorization success');
            cy.visit({
              url: '/',
              method: 'GET'
            });
    
            cy.log('Visited home page');
            cy.url().should('include', '/dashboard');
          })
      });

      it('Dashboard', () => {
        cy.log('You are in dashboard bro')

        cy.intercept({
            method: 'GET',
            url: `${config.apiUrl}/v1/get-my-courses`
        }).as('myCourses')

        cy.get('@myCourses').then(data => {
            cy.log(data, 'log')
        })

      })
})