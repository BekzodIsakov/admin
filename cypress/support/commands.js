// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';
import 'cypress-file-upload';

import { storageService } from "../../src/services/storage.service"
import { config } from "../../src/config"
import { groupByCategories } from '../../src/utils/group-by-categories'

const AUTH_NUMBER = '+998901142389'
const STATIC_MESSAGE_CODE = '321123'
const TESTING_DEVICE = 'web'
const TEST_USER_NAME = 'Abutech'

Cypress.Commands.add('login', () => {
    return cy.request({
        method: 'POST',
        headers: {
            'client-id': config.clientId
        },
        url: `${config.apiUrl}/v1/auth/otp/generate/student`,
        body: {
            phone: AUTH_NUMBER
        }
    }).then((resSendCode) => {
        if (resSendCode.body.user_found) {
            cy.request({
                method: 'POST',
                headers: {
                    'client-id': config.clientId
                },
                url: `${config.apiUrl}/v1/auth/otp/confirm/student`,
                body: {
                    phone: AUTH_NUMBER,
                    code: STATIC_MESSAGE_CODE,
                    device: TESTING_DEVICE,
                    secret: resSendCode.body.secret
                }
            })
                .then((res) => {
                    cy.log('Success login', res)
                    storageService.setRefreshToken(res.body.token.refresh_token);
                    storageService.setAccessToken(res.body.token.access_token);
                })
        } else {
            cy.request({
                method: 'POST',
                headers: {
                    'client-id': config.clientId
                },
                url: `${config.apiUrl}/v1/auth/register/student`,
                body: {
                    phone: AUTH_NUMBER,
                    code: STATIC_MESSAGE_CODE,
                    name: TEST_USER_NAME,
                    device: TESTING_DEVICE,
                    secret: resSendCode.body.secret
                }
            })
                .then((res) => {
                    cy.log('Success login', res)
                    storageService.setRefreshToken(res.body.token.refresh_token);
                    storageService.setAccessToken(res.body.token.access_token);
                })
        }
    })

})

Cypress.Commands.add('dashboardInitialize', () => {
    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/v1/get-my-courses`
    }).as('myCourses')

    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/v1/get-latest-video`
    }).as('latestVideo')

    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/v1/certificate`
    }).as('certificate')

    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/v1/homework-statistics`
    }).as('homeworkStatistics')

    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/v1/post-latest`
    }).as('postLatest')

    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/v1/recomended-course`
    }).as('recomendedCourse')

    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/v1/promo`
    }).as('promo')

    cy.visit({
        url: '/',
        method: 'GET'
    });

    cy.log('Visited home page');
    cy.url().should('include', '/dashboard');

    // wait

    cy.wait('@myCourses').then(({ response }) => {
        const courses = response.body.student_courses
        cy.writeFile('cypress/fixtures/courses.json', { courses: courses })
        cy.writeFile('cypress/fixtures/categories.json', { categories: groupByCategories(courses) })

        if (courses.length) {
            cy.wait('@latestVideo').then(({ response }) => {
                cy.check(response.statusCode === 200)
                cy.writeFile('cypress/fixtures/latestVideo.json', response.body)
            })

            cy.wait('@certificate').then(({ response }) => {
                cy.check(response.statusCode === 200)
                cy.writeFile('cypress/fixtures/certificates.json', response.body)
            })

            cy.wait('@homeworkStatistics').then(({ response }) => {
                cy.writeFile('cypress/fixtures/homeworkStatistics.json', response.body)
            })
        } else {
            cy.wait('@promo').then(({ response }) => {
                cy.check(response.statusCode === 200)
                cy.writeFile('cypress/fixtures/promo.json', response.body.promos?.[0])
            })

            cy.wait('@recomendedCourse').then(({ response }) => {
                cy.check(response.statusCode === 200)
                cy.writeFile('cypress/fixtures/recomendedCourse.json', response.body.courses)
            })

            cy.wait('@postLatest').then(({ response }) => {
                cy.check(response.statusCode === 200)
                cy.writeFile('cypress/fixtures/latestNews.json', response.body)
            })
        }
    })
})

Cypress.Commands.add('coursesInitialize', () => {
    // cy.log('Visited course page');
    // cy.url().should('include', '/courses');

    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/v1/get-my-courses`
    }).as('myCourses')

    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/v1/post-latest`
    }).as('postLatest')

    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/v1/recomended-course`
    }).as('recomendedCourse')

    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/v1/promo`
    }).as('promo')

    cy.wait('@myCourses').then(({ response }) => {
        const courses = response.body.student_courses
        cy.writeFile('cypress/fixtures/courses.json', { courses: courses })
        cy.writeFile('cypress/fixtures/categories.json', { categories: groupByCategories(courses) })

        cy.wait('@postLatest').then(({ response }) => {
            cy.writeFile('cypress/fixtures/latestNews.json', response.body)
        })

        cy.wait('@recomendedCourse').then(({ response }) => {
            // cy.check(response.statusCode === 200)
            cy.writeFile('cypress/fixtures/recomendedCourse.json', response.body.courses)
        })

        cy.wait('@promo').then(({ response }) => {
            // cy.check(response.statusCode === 200)
            cy.writeFile('cypress/fixtures/promo.json', response?.body.promos?.[0])
        })
    })
})

Cypress.Commands.add('paymentsInitialize', () => {

    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/v1/post-latest`
    }).as('postLatest')

    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/v1/recomended-course`
    }).as('recomendedCourse')

    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/v1/promo`
    }).as('promo')

    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/v1/my-transaction` 
    }).as('transactions')

    cy.log('Visited payment page');
    cy.url().should('include', '/payments');

    cy.wait('@postLatest').then(({ response }) => {
        cy.writeFile('cypress/fixtures/latestNews.json', response.body)
    })

    cy.wait('@recomendedCourse').then(({ response }) => {
        // cy.check(response.statusCode === 200)
        cy.writeFile('cypress/fixtures/recomendedCourse.json', response.body.courses)
    })

    cy.wait('@promo').then(({ response }) => {
        // cy.check(response.statusCode === 200)
        cy.writeFile('cypress/fixtures/promo.json', response?.body.promos?.[0])
    })

    cy.wait('@transactions').then(({response}) => {
        cy.writeFile('cyptress/fixtures/transactions.json', response?.body.transactions)
        cy.log('writed')
    })
})

Cypress.Commands.add('settingsInitialize', () => {
    cy.log('Visited settings page');
    cy.url().should('include', '/settings');
})

Cypress.Commands.add('courseNotes', () => {
    cy.log('visited course notes component');
    cy.url().should('include', '/courses/mkao29mdaos')

    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/note/mkao29mdaos/sort/desc`
    }).as('notes')

    cy.wait('@notes').then(({response}) => {
        cy.log('All notes have received')
        cy.writeFile('cyptress/fixtures/notes.json', response?.body)
    })
})

Cypress.Commands.add('courseHomeWorks', () => {
    cy.log('visited course tasks component')
    cy.url().should('include', '/courses/mkao29mdaos')
})

Cypress.Commands.add('courseAdditionalGuide', () => {
    cy.log('visited course tasks component')
    cy.url().should('include', '/courses/mkao29mdaos')

    cy.intercept({
        method: 'GET',
        url: `${config.apiUrl}/v1/course/mkao29mdaos/chapter`
    }).as('addguide')

    cy.wait('@addguide').then(({response}) => {
        cy.writeFile('cyptress/fixtures/chapters.json', response?.body)
    })
})