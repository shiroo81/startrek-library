/// <reference types="cypress" />

describe("Given I want to use assertions", () => {
  describe("When I have entered information in the form", () => {
    // Write the proper commands inside the test cases.
    it("Then it should validate all details", () => {
      cy.get("a").contains("Christopher Pike");
      cy.get('button').contains('Edit').click();

      // Use cy.url(), or cy.location(), or both to assert the /characters/ path, host and port of the URL.
      cy.url().should("include", "/characters/"); 

      cy.location().should((loc) => {
        expect(loc.host).to.eq("localhost:5173");
        expect(loc.port).to.eq("5173");
      });

    // Use should(). Validate the name and year of birth are correct, and validate the gender is NOT male.
      cy.get("span")
        .contains("Name")
        .siblings("input")
        .should("have.value", "Christopher Pike");
      cy.get('input[name="gender"]').should("not.have.value", "f");

      cy.get("span")
        .contains("YearOfBirth")
        .siblings("input")
        .should("have.value", "2219");

    // Validate that the Save button is visible.
    // BONUS: Validate there is NO Exit button.
      cy.get("button").contains("Save").should("be.visible");

      cy.get("button").contains("Exit").should("not.exist");

    // Then it should validate there 50 list items"
      cy.get(".characterList").children("li").should("have.length", 50);
    });

    before(() => {
      cy.visit("/characters/CHMA0000003106");
    });
  });
});
