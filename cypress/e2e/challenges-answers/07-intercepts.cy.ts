/// <reference types="cypress" />
import localforage from 'localforage';


describe(`When working with Network requests`, () => {
  // Use cy.intercept() to catch an API call, give it an alias
  it(`Then I should be able to intercept an API calls`, () => {
    cy.intercept({
      method: "POST",
      url: "http://stapi.co/api/v1/rest/character/search",
    });

    cy.visit('');
    // Wait for 3 seconds
    cy.wait(3000);
  });

  // BONUS: Use cy.intercept() to catch an API call, give it an alias and wait for the execution.
  it(`Then I should be able to intercept an API call and wait for it`, () => {
    cy.intercept({
      method: "POST",
      url: "http://stapi.co/api/v1/rest/character/search",
    }).as("postSearch");

    cy.visit('');
    // Wait for the call to have finished.
    cy.wait('@postSearch');
  });
});
