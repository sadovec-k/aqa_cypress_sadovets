const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://qauto2.forstudy.space/",
    email: "example2143@example.com",
    password: "Test1test",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
