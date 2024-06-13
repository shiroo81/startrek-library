/// <reference types="cypress" />

describe("Given I want to learn how to work with elements", () => {
  describe("When there are different types of elements", () => {
    // Write the proper commands inside the test cases.
    // Always use the appropriate Cypress commands.

    it("Then should select elements in different manners", () => {
      cy.visit('');

      //Use the class to select the element which has the class name characterList.
      // Additional: select the first or last element from the table and click on it.


      // BONUS: Filter the <a> element which is active


      // BONUS: Filter the <a> elements which are NOT active


      // BONUS: Find the <a> element which is active


      cy.get('h1').contains('Thomas', {timeout: 10000});

      // Use the text / contents of the Edit button to select and click it.:


      // Use the Id attribute to select the contact-form and click on it.
      

      // Use the children command to navigate from the label Gender to the input field.
      

      // Use the siblings command to navigate from the span Gender to the input field.

      // Use the parentsUntil command to go from input name= gender to the class contact-form
      
      
    });
  });
});
