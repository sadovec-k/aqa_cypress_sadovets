const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://qauto.forstudy.space/",
    email: "example2140@example.com",
    password: "Test1test",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
