/// <reference types="cypress" />

describe("Given I want to work with hooks", () => {
  describe("When there is a before or beforeEach hook available", () => {
    // Move the visit to a before or beforeEach hook.

    it("Then I should be able to use them accordingly", () => {
      cy.visit("/");
      cy.log('This the logging for testcase 1')
      cy.get("a").contains("Brent Spiner").click();

      // Add testcode
    });

    it("Then should be possible to submit a form", () => {
      cy.visit("/characters/CHMA0000206844");
      cy.log('This the logging for testcase 2')
      // add testcode
    });

    // Use before or beforeEach and notice the difference.
    before(() => {
    });
  });
});
