/// <reference types="cypress" />

describe("Given I want to learn how to work with elements", () => {
  describe("When there are different types of elements", () => {
    // Write the proper commands inside the test cases.
    // Always use the appropriate Cypress commands.

    it("Then should select elements in different manners", () => {
      cy.visit('');

      //Use the class to select the element which has the class name characterList.
      // Additional: select the first or last element from the table and click on it.
      cy.get('[class="characterList"]').children("li").first().click();
      // Or:
      // cy.get(".characterList").children("li").last().click();

      // BONUS: Filter the <a> element which is active
      cy.get("a").filter(".active");
      // BONUS: Filter the <a> elements which are NOT active
      cy.get("a").not(".active");
      // BONUS: Find the <a> element which is active
      cy.get("li").find(".active");

      cy.get('h1').contains('Thomas', {timeout: 10000});

      // Use the text / contents of the Edit button to select and click it.:
      cy.get("button").contains("Edit").click();
      // Or:
      // cy.contains("button", "Edit").click();

      // Use the Id attribute to select the contact-form and click on it.
      cy.get('[id="contact-form"]').click;
      // Or:
      // cy.get("#contact-form").click();

      // Use the children command to navigate from the label Gender to the input field.
      cy.get("label").children('input[name="gender"]');
      // Use the siblings command to navigate from the span Gender to the input field.
      cy.get("span").contains("Gender").siblings('input[name="gender"]');
      // Use the parentsUntil command to go from input name= gender to the class contact-form
      cy.get('input[name="gender"]')
        .parentsUntil("#contact-form");
    });
  });
});
