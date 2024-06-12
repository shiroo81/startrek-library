/// <reference types="cypress" />

import characterdata from "../../fixtures/data-input.json";
// BONUS ASSIGNMENT: WRITE A DYNAMIC TEST WHERE YOU CAN IMPORT FIXTURE DATA
// AND INJECT THE DYNAMIC VARIABLES IN YOUR SCRIPT.
// EXTRA BONUS: ADD A DYNAMIC VARIABLE TO THE TEST CASE NAMES AS WELL.

import * as commands from '../../support/commands';


describe(`WORK`, () => {
  it(`Then it should work`, () => {
    // const flowstap = JSON.stringify(characterdata);
    // sessionStorage.setItem("form-data", flowstap);
    commands.setLocalStorage(characterdata);

  });
});
// });
// characterdata.forEach((c) => {
//   describe(`When Data-Driven-Testing with Cypress the ${c.testcase} time`, () => {
//     it(`Then I should be able to dynamically generate testcases edit ${c.name}`, () => {
//       cy.visit("/characters/CHMA0000206844");
//       cy.get("button").contains("Edit").click();

//       cy.getSelEl("inputName").clear().type(c.name);
//       cy.getSelEl("inputGender").clear().type(c.gender);

//       cy.getSelEl("inputAvatar").clear().type(c.avatar);

//       cy.getSelEl("inputyearOfBirth").clear().type(c.yearOfBirth);

//       cy.get("button").contains("Save").click();
//     });
//   });
// });
