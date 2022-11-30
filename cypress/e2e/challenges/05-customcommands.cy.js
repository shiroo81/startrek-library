/// <reference types="cypress" />

describe("Given I want to interact with elements", () => {
  describe("When there are TEST IDS available", () => {
    // Use the custom command getSelEl() to interact with all elements.
    // You can find the test ID's in the edit.jsx file or through the Cypress Playground and Chrome DevTools.

    it("Then I should be able to use them accordingly", () => {
      cy.visit("/");
      

      cy.get('button').contains('Save').click();
    });
  });
});
