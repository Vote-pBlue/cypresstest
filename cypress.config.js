const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xxczck',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
