declare namespace Cypress {
  interface Chainable {
    // Define the structure of your custom commands here
    getSelEl(value: string): Chainable<Element>;
    injectTestdata(
      name: string,
      avatar: string,
      gender: string,
      yearOfBirth: string
    ): Chainable<Element>;
  }
}
