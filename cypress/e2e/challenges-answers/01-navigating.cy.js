// BE ACCURATE IN USING THE FOLLOWING GHERKN SYNTAX:
describe("Given there is are multiple pages", () => {
  describe("When I navigate through the application", () => {
    // Write the proper commands inside the test cases.
    // Always use the appropriate Cypress commands.

    it("Then should visit the homepage", () => {
      // Write the command to go the homepage.
      cy.visit("");
    });

    it("Then should use the navigation menu to open a character page", () => {
      // Open a card of one of the characters.
      cy.get("a").contains("Brent Spiner").click();
    });

    it("Then should navigate directly to the character", () => {
      // In the previous test the path of the URL changed.
      // Use this information to use the .visit() command to go there directly.
      cy.visit("/characters/CHMA0000206844");
    });
  });
});
