/// <reference types="cypress" />
import localforage from "localforage";

describe(`When working with Network requests`, () => {
  it(`Then I should be able to use these API calls`, () => {
    // Use the intercept to load mock data from the test-data.json file.
    // The file is located in the fixtures folder.
    // Write an assertion to validate one name coming from the fixture file.
    cy.intercept(
      {
        method: "POST",
        url: "http://stapi.co/api/v1/rest/character/search",
      },
      { fixture: "test-data.json" }
    ).as("postSearch");

    cy.visit("");
    cy.wait("@postSearch");
    cy.get(".characterList")
      .find('a[href="/characters/CHMA0000054164"]')
      .should("contain", "Paul de Witt");
  });
});