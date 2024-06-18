/// <reference types="cypress" />

describe("Given I want to use assertions", () => {
  describe("When I have entered information in the form", () => {
    // Write the proper commands inside the test cases.
    it("Then it should validate all details", () => {
      cy.get("a").contains("Christopher Pike");
      cy.get('button').contains('Edit').click();

      // Use cy.url(), or cy.location(), or both to assert the /characters/ path, host and port of the URL.

    // Use should(). Validate the name and year of birth are correct, and validate the gender is NOT male.

    // Validate that the Save button is visible.
    // BONUS: Validate there is NO Exit button.


    // Then it should validate there 50 list items"

    });

    before(() => {
      cy.visit("/characters/CHMA0000003106");
    });
  });
});
