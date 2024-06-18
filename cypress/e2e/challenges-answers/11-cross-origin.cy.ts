/// <reference types="cypress" />

describe("Given there are multiple domains in scope", () => {
  describe("When we write testcases for different origins", () => {

    //TODO two origins testing!!!!!!!!!!!!!!!!!!!!!!!!!!!
    it("Then should navigate to the baseURL", () => {
      cy.visit("/");
    });

    it("Then should go to another superdomain", () => {
      cy.visit("https://paultest.software/");
    });

    it("Then should navigate to both different domains in one test", () => {
      cy.visit("/");
      cy.visit("https://paultest.software/");
      cy.origin("https://paultest.software/", () => {
        cy.get("h2").should("contain", "Development is more then code");
      });
    });

    it("Then we go forward and back between domains", () => {
      // GO TO THE BASEURL
      cy.visit("/");
      // GO FORWARD TO THE NEXT SUPERDOMAIN
      cy.visit("https://paultest.software/");
      cy.origin("https://paultest.software/", () => {
        cy.get("h2").should("contain", "Development is more then code");
      });
      // ...AND BACK TO OUR BASEURL
      cy.intercept({
        method: "POST",
        url: "http://stapi.co/api/v1/rest/character/search",
      }).as("postSearch");

      cy.visit("/");
      cy.get("@postSearch").should('exist');
    });
  });
});
