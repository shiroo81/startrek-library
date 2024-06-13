/// <reference types="cypress" />

describe("Given I want to use assertions", () => {
  describe("When I have entered information in the form", () => {
    // There are multiple small errors here.
    // Use the cy.debug() and cy.pause() command to debug.

    it("Then it should validate William T. Riker his credentials", () => {
      cy.visit("/characters/CHMA0000206844");
      cy.url().should("include", "/characters/CHMA0000206844"); // => true

      cy.get("label")
        .contains("Name")
        .siblings("input")
        .should("contain", "William Riker");
      cy.getSelEl('inputgender').should("have.text", "m");
    });

    it("Then it should validate list items", () => {
      cy.get(".characterList").should("have.length", 50);
      cy.get("#characterlist").should("have.class", "characterList");
    });
  });
});
