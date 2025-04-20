/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing tests on uncaught exceptions
    return false;
});
// import 'cypress-axe';

describe('TestScenario2', () => {
    beforeEach(() => {
        cy.viewport(412, 915); // Samsung Note 9 size
      });
    it('should visit the page and wait for all elements to load', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground');
        cy.viewport(412, 915);  // Samsung Note 9 screen dimensions (width: 412px, height: 915px)
        cy.wait(2000);  // Adjust wait time for page load
    });

    it('should click the input form submit button', () => {
        cy.contains('Input Form Submit').click();
    });

    // it('should verify form accessibility using cypress-axe', () => {
    //     cy.injectAxe();
    //     cy.checkA11y();
    // });

    it('should fill in all form fields', () => {
        // Name field (Assuming it's unique)
        cy.get('input[name="name"]').type('John');
        cy.get('input[name="email"]#inputEmail4').type('johndoe@example.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('input[name="company"]').type('company');
        cy.get('input[name="website"]').type('website');
        cy.get('select[name="country"]').select('MY');
        cy.get('input[name="city"]').type('city');
        cy.get('input[name="address_line1"]').type('address_line1');
        cy.get('input[name="address_line2"]').type('address_line2');
        cy.get('input[id="inputState"]').type('inputState');
        cy.get('input[name="zip"]').type('zip');
    });

    it('should submit the form and assert submission', () => {
        // Click the submit button instead of form submission
        cy.get('button[type="submit"].selenium_btn').click();

        // Assert the submission message is visible
        cy.contains('Thanks for contacting us, we will get back to you shortly.')
            .should('be.visible');
    });

    it('should check performance metrics using Cypress Lighthouse', () => {
        cy.lighthouse({
            performance: 50,
            accessibility: 50,
            bestPractices: 50,
            seo: 50,
        });
    });

    it('should validate success message after form submission', () => {
        cy.contains('Thanks for contacting us, we will get back to you shortly.')
            .should('be.visible');
    });

    it('should close the browser tab', () => {
        cy.window().then((win) => {
            win.close();
        });
    });
});
