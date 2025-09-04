const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  projectId: 'xxczck',
  e2e: {
    baseUrl: 'https://parabank.parasoft.com/parabank/index.htm',
    setupNodeEvents(on, config) {
       on('task', {
        getUserFiles() {
          const dir = path.join(__dirname, 'cypress/fixtures/userlogin');
          return fs.readdirSync(dir)
            .filter(file => file.endsWith('.json'))
            .map(file => file.replace('.json', ''));
        }
      }); 
      // implement node event listeners here
    },
  },
});
