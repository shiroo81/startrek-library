/// <reference types="cypress" />

import characterdata from "../fixtures/data-input.json";
// BONUS ASSIGNMENT: WRITE A DYNAMIC TEST WHERE YOU CAN IMPORT FIXTURE DATA
// AND INJECT THE DYNAMIC VARIABLES IN YOUR SCRIPT.
// EXTRA BONUS: ADD A DYNAMIC VARIABLE TO THE TEST CASE NAMES AS WELL.

describe(`When Data-Driven-Testing with Cypress the x time`, () => {
  it(`Then I should be able to dynamically generate testcases edit x`, () => {
    cy.visit("/characters/CHMA0000206844");
    cy.get("button").contains("Edit").click();

    cy.getSelEl("inputName").clear().type("name");
    cy.getSelEl("inputGender").clear().type("male");

    cy.getSelEl("inputAvatar").clear().type("avatar");

    cy.getSelEl("inputyearOfBirth").clear().type("yearOfBirth");

    cy.get("button").contains("Save").click();
  });
});
