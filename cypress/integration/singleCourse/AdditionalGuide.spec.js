/* eslint-disable no-unused-expressions */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable cypress/no-assigning-return-values */
import '@testing-library/cypress/add-commands';
import '../../support'

context('Cypress Additional Guide', () => {
    beforeEach(() => {
        cy.log('Authorization pending')
        return cy.login().then(() => cy.visit('/courses/mkao29mdaos')).then(() => cy.courseAdditionalGuide())
    })

    it('check course additional guide', () => {
        cy.contains('Qo’shimcha qo’llanmalar va fayllar').click();
        // eslint-disable-next-line jest/valid-expect-in-promise
        cy.fixture('chapters').then(data => {
            // eslint-disable-next-line jest/valid-expect
            expect(data).to.not.be.undefined
            // eslint-disable-next-line jest/valid-expect
            expect(data?.chapters?.[0]?.lessons?.[0]?.resources).to.not.be.undefined
        })

    })
})