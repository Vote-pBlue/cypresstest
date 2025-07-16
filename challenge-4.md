# 🧪 Cypress Challenge 04: Cypress Configuration & Custom Commands

## 🎯 Objective

Clean up and streamline your Cypress setup. This includes setting a base URL, adding a browser-specific script, and creating a reusable custom command for registering a user.

---

## 🧰 Prerequisites

- Cypress already installed
- Previous tests written
- Read the Cypress documentation about Cypress config (and accept that you won't understand a lot of it and that is ok)

---

## 📝 Task Instructions

### 1. Update Cypress Configuration

- Set the `baseUrl` in your Cypress config file (`cypress.config.js`) - refer to docs
  - Use: `https://parabank.parasoft.com/parabank`
- Test it works by updating your tests to visit the baseUrl.
- Create a new npm script to open Cypress in **Chrome**
  - Add to `package.json` scripts - you run these scripts with `npm run` followed by the script name eg. `npm run test`

---

### 2. Create a Reusable Custom Command

In your `cypress/support/commands.js` or `.ts` file:

- Add a Cypress custom command to register a user
- Use it in a new test file to verify that the registration still works with the new command

> 💡 The custom command should accept user input values and encapsulate the form-filling logic. There are some examples in the commands.js file. Try to complete this with minimal help from AI, the struggle is worth it. AI will read this file and complete every task in about 5 seconds.

---

### 3. Run the test

Make sure your new command works and the config is respected.

---

### 4. Commit your changes

git add -p
confirm the files you wish to add with y/n
git commit -m “a message describing your changes”

---

## ✅ Completion Checklist

- [ ] Created `chore/cypress-config-cleanup` branch
- [ ] Updated Cypress baseUrl
- [ ] Added a `npm run cypress:chrome` script
- [ ] Created a custom command for user registration
- [ ] Tested the new command
- [ ] Committed and pushed changes
- [ ] Opened a PR

---
