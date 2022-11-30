import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://127.0.0.1:5173/",
    chromeWebsecurity: false,
    retries: { runMode: 0, openMode: 0 },
  },
});
