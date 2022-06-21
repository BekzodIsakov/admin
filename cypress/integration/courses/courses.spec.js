/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
import '@testing-library/cypress/add-commands';
import '../../support'

context('Cypress.Courses', () => {
    beforeEach(() => {
        cy.log('Authorization pending');
        return cy.login().then(() => cy.visit('/courses')).then(() => cy.coursesInitialize())
    });

    it('Checking courses', () => {
        return cy.fixture('courses').then(data => {
            expect(data).to.not.be.undefined
            expect(data.courses).to.be.an('array')
        })
    })

    it('check dashboard active banner', () => {
        return cy.fixture('promo').then(data => {
            expect(data).to.not.be.undefined
            expect(data).to.be.an('object')
        })
    })

    it('check dashhboard recomended courses', () => {
        return cy.fixture('recomendedCourse').then(data => {
            expect(data).to.not.be.undefined
            expect(data).to.be.an('array')
        })
    })
})