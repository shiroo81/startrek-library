/// <reference types="cypress" />

describe("Given I want to use assertions", () => {
  describe("When I have entered information in the form", () => {
    // Write the proper commands inside the test cases.
    it("Then it should validate the host, path and port from the URL", () => {
      cy.get("a").contains("Leonard Bones McCoy");
      cy.get('button').contains('Edit').click();

      // Use cy.url(), or cy.location(), or both to assert the /characters/ path, host and port of the URL.
      cy.url().should("include", "/characters/"); 

      cy.location().should((loc) => {
        expect(loc.host).to.eq("127.0.0.1:5173");
        expect(loc.port).to.eq("5173");
      });
    });

    // Use should(). Validate the name and year of birth are correct, and validate the gender is NOT male.
    it("Then it should validate the name and gender", () => {
      cy.get("span")
        .contains("Name")
        .siblings("input")
        .should("have.value", "Leonard Bones McCoy");
      cy.get('input[name="gender"]').should("not.have.value", "f");

      cy.get("span")
        .contains("YearOfBirth")
        .siblings("input")
        .should("have.value", "2227");
    });

    // Validate that the Save button is visible.
    // BONUS: Validate there is NO Exit button.
    it("Then it should validate the buttons", () => {
      cy.get("button").contains("Save").should("be.visible");

      cy.get("button").contains("Exit").should("not.exist");
    });

    it("Then it should validate there 51 list items", () => {
      cy.get(".characterList").children("li").should("have.length", 51);
    });

    before(() => {
      cy.visit("/");
      cy.injectTestdata('Leonard Bones McCoy', 'https://intl.startrek.com/sites/default/files/styles/content_full/public/images/2019-07/fe256faf97c200de0f7486ddf56c02f6.jpg?itok=ss-QBf0t', 'm', '2227')
    });
  });
});
