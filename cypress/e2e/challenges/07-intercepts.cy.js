/// <reference types="cypress" />

describe(`When working with Network requests`, () => {
  it(`Then I should be able to intercept an API calls`, () => {
    // Use cy.intercept() to catch an API call, give it an alias


    cy.visit('');
    // Wait for 3 seconds

    
  });

  // BONUS: Use cy.intercept() to catch an API call, give it an alias and wait for the execution.
  it(`Then I should be able to intercept an API call and wait for it`, () => {


    cy.visit('');
    // Wait for the call to have finished.


  });
});
