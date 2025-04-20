///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing tests on uncaught exceptions
    return false;
});

describe('TestScenario1: Navigate to Drag & Drop Sliders page', () => {
    it('should open the Selenium Playground page and click on Drag & Drop Sliders link', () => {
        // Step 1: Visit the Selenium Playground page
        cy.visit('https://www.lambdatest.com/selenium-playground');

        // Step 2: Re-query the element and ensure stability before clicking
        cy.contains('Drag & Drop Sliders')
            .should('exist')
            .should('be.visible')
            .click({ force: true }); // Force the click action, bypassing any blockers

        // Assertion to verify navigation
        cy.url().should('include', '/drag-drop-range-sliders-demo');
    });
});
