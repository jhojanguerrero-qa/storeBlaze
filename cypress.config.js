const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/test/*.cy.{js,jsx,ts,tsx}'
  },
});
