describe("Given I want to interact with elements", () => {
  describe("When there are form elements available", () => {
    // Write the proper commands inside the test cases.
    // Always use the appropriate Cypress commands.

    it("THen I should be able to use them accordingly", () => {
      cy.visit("/characters/CHMA0000206844");

      //Use the click command:
      cy.get("button").contains("Edit").click();

      // Use the type command:
      cy.get("span").contains("Name").siblings("input").type("William Riker");
      cy.get('input[name="gender"]').type("M");

      //Use keyboard action: press enter:
      cy.get("span")
        .contains("YearOfBirth")
        .siblings("input")
        .type("2335{enter}");

      // cy.get('button').contains('Save).click();
    });

    // OR: instead of using the Save Button, you can easily submit a form as well:
    it("Then should be possible to submit a form", () => {
      cy.visit("/characters/CHMA0000206844");
      cy.get("button").contains("Edit").click();

      cy.get("span")
        .contains("Name")
        .siblings("input")
        .type("William T. Riker");

      cy.get("#contact-form").submit();
    });
  });
});
