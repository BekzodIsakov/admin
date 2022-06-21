/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable cypress/no-assigning-return-values */
import '@testing-library/cypress/add-commands';
import '../../support'

context('Cypress.Settings', () => {
    beforeEach(() => {
        cy.log('Authorization pending')
        return cy.login().then(() => cy.visit('/settings')).then(() => cy.settingsInitialize())
    })

    it('Check settings', () => {
        cy.fixture('abutech.jpg', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy.get('[data-test-id="user-img"]').attachFile({
                    fileContent,
                    filePath: 'abutech.jpg',
                    encoding: 'utf-8',
                    lastModified: new Date().getTime()
                });
            });
        cy.get('[data-testid="user-name"]').clear();
        cy.get('[data-testid="user-name"]').type('Abutech')
        cy.get('[data-testid="user-surname"]').clear()
        cy.get('[data-testid="user-surname"]').type('Test')
        cy.get('[data-testid="field-select"]').click();
        cy.contains('Erkak').click()
        cy.get('[data-testid="user-borndate"]').focus()
        cy.get('[data-testid="user-borndate"]').type('2000-01-31');
        cy.get('[data-testid="user-email"]').clear();
        cy.get('[data-testid="user-email"]').type('abutech@gmail.com')
        cy.get('[data-testid="user-sub"]').click();
    })
})