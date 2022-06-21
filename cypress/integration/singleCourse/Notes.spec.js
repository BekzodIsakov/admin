/* eslint-disable no-template-curly-in-string */
/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable cypress/no-assigning-return-values */
import '@testing-library/cypress/add-commands';
import '../../support'

context('Cypress.Course Notes', () => {
    beforeEach(() => {
        cy.log('Authorization pending')
        return cy.login().then(() => cy.visit('/courses/mkao29mdaos')).then(() => cy.courseNotes())
    })

    it('Check course notes', () => {

        // send note
        cy.contains('Qaydlarim').click();
        cy.get('[data-testid="notes-textarea"]').type('Notes Test')
        cy.get('[data-testid="send-note"]').click();
    })

    it('Edit note', () => {
        return cy.fixture('notes').then(data => {
            if(data.notes) {
                cy.get(`[data-testid={course-notes-edit-${data.notes[0].id}}]`).click();
                cy.get('[data-testid="notes-textarea"]').type(' edit retest')
                cy.get('[data-testid="edit-note"]').click();
            }
        })
    })

    it('Delete note', () => {
        return cy.fixture('notes').then(data => {
            if(data.notes) {
                cy.get(`[data-testid={course-notes-edit-${data.notes[0].id}}]`).click();
                cy.log('Note delated')            
            }
        })
    })
})