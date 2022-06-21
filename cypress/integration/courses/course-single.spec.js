/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
import '@testing-library/cypress/add-commands';
import '../../support';

context('Cypress.CoursesSingle', () => {
  beforeEach(() => {
    cy.log('Authorization pending');
    return cy
      .login()
      .then(() => cy.visit('/courses'))
      .then(() => cy.coursesInitialize());
  });

  it('Checking courses', () => {
    return cy.fixture('courses').then(data => {
      expect(data).to.not.be.undefined;
      expect(data.courses).to.be.an('array');
      cy.log(data.courses[0].id);
      cy.visit('/courses/' + data.courses[0].id);
    });
  });

  it('Cheking video player', () => {
    return cy.get('.video-player').should('be.visible');
  });

  it('Cheking next and prev button', () => {
    return cy.get('.video-player').should('be.visible');
  });
});
