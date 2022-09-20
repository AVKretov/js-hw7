const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "j6nwyo",
    baseUrl: "http://qamid.tmweb.ru/client/index.php",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
