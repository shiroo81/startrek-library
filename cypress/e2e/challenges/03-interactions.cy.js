/// <reference types="cypress" />

describe("Given I want to interact with elements", () => {
  describe("When there are form elements available", () => {
    // Write the proper commands inside the test cases.
    // Always use the appropriate Cypress commands.

    it("Then I should be able to use them accordingly", () => {
      cy.visit("/characters/CHMA0000206844");

      //Use the click command to press the Edit button:
      cy.get("button").contains("Edit").click();

      // Use the type command to edit the Name:



      //Use the type command to edit the yearOfBirth and press enter (keyboard action) to save it.



      // Add the clear command before typing.

    });

    // BONUS: instead of using the Save Button, you can use submit to submit a form as well:
    it.only("Then should be possible to submit a form", () => {
      cy.visit("/characters/CHMA0000206844");


    });
  });
});
