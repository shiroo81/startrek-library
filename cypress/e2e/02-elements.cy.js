describe("Given I want to learn how to work with elements", () => {
  describe("When there are different types of elements", () => {
    // Write the proper commands inside the test cases.
    // Always use the appropriate Cypress commands.

    it("Then should select elements in different manners", () => {
      // Write the command to go the homepage.
      cy.visit("/characters/CHMA0000206844");

      // Use the text / contents of an element:
      cy.get("button").contains("Edit").click();
      // Or:
      cy.contains("button", "Edit").click();

      // Use the id of the element:
      cy.get('id="contact-form"').click;
      // Or:
      cy.get("#contact-form").click();

      //Use the class of the element:
      cy.get('className="characterList"').click();
      // Or:
      cy.get(".characterList").first();
      cy.get(".characterList").last();

      // Parents, children and Siblings:
      cy.get("label").children('input[name="gender"]');
      cy.get("span").contains("Gender").siblings('input[name="gender"]');
      cy.get("label")
        .children('input[name="gender"]')
        .parentsUntil("#contact-form");

      //Tables, filtering and finding:
      cy.get(".characterList").children("li").first();
      cy.get(".characterList").children("li").last();
      cy.get("li").filter(".active");
      cy.get("li").not(".active");
      cy.get("li").find(".active");
    });
  });
});
