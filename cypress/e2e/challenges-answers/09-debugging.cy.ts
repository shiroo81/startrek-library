/// <reference types="cypress" />

describe("Given I want to use assertions", () => {
  describe("When I have entered information in the form", () => {
    // There are multiple small errors here.
    // Use the cy.debug() and cy.pause() command to debug.

    it("THen it should validate the credentials", () => {
      cy.visit("/characters/CHMA0000003106");
      cy.url().should("include", "/characters/CHMA0000003106"); // => true

      cy.get("h1")
        .should("contain", "Christopher Pike");
      // cy.getSelEl('inputgender').should("have.text", "m");
    });

  });
});
