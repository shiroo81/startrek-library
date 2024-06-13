/// <reference types="cypress" />

describe("Given I want to use assertions", () => {
  describe("When I have entered information in the form", () => {
    // Write the proper commands inside the test cases.
    it("Then it should validate the host, path and port from the URL", () => {
      cy.get("a").contains("Leonard Bones McCoy");
      cy.get('button').contains('Edit').click();

      // Use cy.url(), or cy.location(), or both to assert the /characters/ path, host and port of the URL.
  

    });

    // Use should(). Validate the name and year of birth are correct, and validate the gender is NOT male.
    it("Then it should validate the name and gender", () => {


    });

    // Validate that the Save button is visible.
    // BONUS: Validate there is NO Exit button.
    it("Then it should validate the buttons", () => {
  
    });

    it("Then it should validate there 51 list items", () => {

    });

    before(() => {
      cy.visit("/");
      cy.injectTestdata('Leonard Bones McCoy', 'https://intl.startrek.com/sites/default/files/styles/content_full/public/images/2019-07/fe256faf97c200de0f7486ddf56c02f6.jpg?itok=ss-QBf0t', 'm', '2227')
    });
  });
});
