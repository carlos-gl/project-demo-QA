const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: 'https://demoqa.com/',
      hideXHRInCommandLog: true
    },
  env: {
    user_login: 'clins',
    user_password: 'Ham12345!',
    },
    viewportWidth: 1400,
    viewportHeight: 800,
  },
);