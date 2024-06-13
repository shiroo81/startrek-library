/// <reference types="cypress" />

Cypress.Commands.add("getSelEl", (value) => cy.get(`[data-testid=${value}]`));

Cypress.Commands.add("injectTestdata", (name, avatar, gender, yearOfBirth) => {
  cy.intercept("POST", "http://stapi.co/api/v1/rest/character/search").as(
    "postSearch"
  );

  cy.get("button").contains("New").click();
  cy.wait(2000)
  // cy.wait("@postSearch");

  cy.get("i").contains("New entry").click();
  cy.url().should("include", "/characters/");

  cy.get("button").contains("Edit").click();
  cy.url().should("include", "/edit");

  cy.get("span").contains("Name").siblings("input").type(name);

  cy.get('[name="avatar"]').type(avatar);

  cy.get('input[name="gender"]').type(gender);

  cy.get("span").contains("YearOfBirth").siblings("input").type(yearOfBirth);

  cy.get("#contact-form").submit();
});

export function setLocalStorage(value) {
  const flowstap = JSON.stringify(value);
  sessionStorage.setItem("form-data", flowstap);
}