/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */

import '@testing-library/cypress/add-commands';
import '../../support'

context('Cypress.Dashboard', () => {
    beforeEach(() => {
        cy.log('Authorization pending');
        return cy.login().then(() => cy.dashboardInitialize())
    });

    it('check dashboard courses', () => {
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

    it('check categories', () => {
        return cy.fixture('categories').then(data => {
            expect(data).to.not.be.undefined
            expect(data?.categories).to.be.an('array')
        })
    })

    it('check latestVideo', () => {
        return cy.fixture('latestVideo').then(data => {
            expect(data).to.not.be.undefined
        })
    })

    it('check homeworkStatistics', () => {
        return cy.fixture('homeworkStatistics').then(data => {
            expect(data).to.not.be.undefined
        })
    })
});
