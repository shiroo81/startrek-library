/// <reference types="cypress" />

describe("Given I want to interact with elements", () => {
  describe("When there are TEST IDS available", () => {
    // Rewrite the navigation by using the custom command getSelEl().
    // You can find the test ID's in the edit.jsx file.

    it("Then I should be able to use them accordingly", () => {
      cy.visit("/");

      cy.getSelEl("CHMA0000206844").click();

      cy.url().should("include", "/characters/"); // => true
      cy.get("button").contains("Edit").click();

      cy.getSelEl("inputName")
        .clear()
        .type("William Riker");
      cy.getSelEl("inputGender").clear().type("M");

      cy.getSelEl("inputyearOfBirth")
        .clear()
        .type("2335");

      cy.get('button').contains('Save').click();
    });
  });
});
