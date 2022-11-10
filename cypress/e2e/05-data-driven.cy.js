import characterdata from "../fixtures/data-input.json";

characterdata.forEach((c) => {

  describe(`When Data-Driven-Testing with Cypress the ${c.testcase} time`, () => {
    it(`Then I should be able to dynamically generate testcases edit ${c.name}`, () => {
      cy.visit("/characters/CHMA0000206844");
      cy.get("button").contains("Edit").click();

      cy.get("span").contains("Name").siblings("input").clear().type(c.name);
      cy.get('input[name="gender"]').clear().type(c.gender);

      cy.get("span")
        .contains("Avatar URL")
        .siblings("input")
        .clear()
        .type(c.avatar);

      cy.get("span")
        .contains("YearOfBirth")
        .siblings("input")
        .clear()
        .type(c.yearOfBirth);

      cy.get("button").contains("Save").click();
    });
  });
  
});


