/// <reference types="cypress" />

describe("Given I want to interact with elements", () => {
  describe("When there are form elements available", () => {
    // Write the proper commands inside the test cases.
    // Always use the appropriate Cypress commands.

    it("Then I should be able to use them accordingly", () => {
      cy.visit("/characters/CHMA0000206844");

      //Use the click command:
      cy.get("button").contains("Edit").click();

      // Use the type command:
      cy.get("span")
        .contains("Name")
        .siblings("input")
        .clear()
        .type("William Riker");
      cy.get('input[name="gender"]').clear().type("M");

      // Add the clear command before typing.

      //Use keyboard action: press enter:
      cy.get("span")
        .contains("YearOfBirth")
        .siblings("input")
        .clear()
        .type("2335{enter}");

      // cy.get('button').contains('Save).click();
    });

    // BONUS: instead of using the Save Button, you can use submit to submit a form as well:
    it.only("Then should be possible to submit a form", () => {
      cy.visit("/characters/CHMA0000206844");
      cy.get("button").contains("Edit").click();

      cy.get("span")
        .contains("Name")
        .siblings("input")
        .clear()
        .type("William T. Riker");

      cy.get("#contact-form").submit();
    });
  });
});
