export {};

declare global {
  namespace Cypress {
    interface Chainable {
      getSelEl(value: string): Chainable<JQuery<HTMLElement>>;
      injectTestdata(
        name: string,
        avatar: string,
        gender: string,
        yearOfBirth: string
      );
    }
  }
}
