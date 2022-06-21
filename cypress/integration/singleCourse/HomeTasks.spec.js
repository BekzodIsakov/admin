/* eslint-disable no-template-curly-in-string */
/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable cypress/no-assigning-return-values */
import '@testing-library/cypress/add-commands';
import '../../support'

context('Cypress.Course homeworks', () => {
    beforeEach(() => {
        cy.log('Authorization pending')
        return cy.login().then(() => cy.visit('/courses/mkao29mdaos')).then(() => cy.courseHomeWorks())
    })

    it('check homework component', () => {})
})