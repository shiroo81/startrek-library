describe("Given I want to use assertions", () => {
  describe("When I have entered information in the form", () => {
    // Write the proper commands inside the test cases.
    // Always use the appropriate Cypress commands.

    it("THen it should validate William T. Riker his credentials", () => {
      cy.visit("/characters/CHMA0000206844");
      cy.url().should("include", "/characters/CHMA0000206844"); // => true
      // Or:
      cy.location().should((loc) => {
        expect(loc.path).to.eq("/characters/CHMA0000206844");
        expect(loc.host).to.eq("localhost:5173");
        expect(loc.port).to.eq("5173");
        expect(loc.origin).to.eq("http://localhost:5173/");
      });

      cy.get("span")
        .contains("Name")
        .siblings("input")
        .should("contain", "William Riker");
      cy.get('input[name="gender"]').should("have.value", "m");

      //Use keyboard action: press enter:
      cy.get("span")
        .contains("YearOfBirth")
        .siblings("input")
        .should("contain", "2335");

      cy.get("button").contains("Save").should("be.visible");
      cy.get("button").contains("Exit").should("not.exist");
    });

    it("Then it should validate list items", () => {
      cy.get(".characterList").should("have.length", 50);
      cy.get("#characterlist").should("have.class", "characterList");
    });
  });
});
