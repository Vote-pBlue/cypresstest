# 🧪 Cypress Challenge 03: Login and Open New Account Flow

## 🎯 Objective

Write an end-to-end test that logs into an existing account and opens a new account. Validate that the UI confirms success, and also assert against the network response to ensure the request succeeded.

---

## 🧰 Prerequisites

- Cypress should already be installed and working
- Copy the branch name from this PR (pull request) and in your project in terminal or a vscode terminal:

``` bash
git checkout main
git pull
git checkout <copied branch name>
```

- You should already have a registered user from the previous challenge, you can use this or register before the test. There are many interesting permutations and challenges when it comes to testing users and registrations as a test suite grows.
- Make sure the site is reachable at: `https://parabank.parasoft.com/parabank/index.htm`

---

## 📝 Task Instructions

### 1. Write a Cypress Test

Your test should:

- Visit the homepage
- Confirm using incorrect credentials displays an error
- Follow the reset password flow
- Login
- Navigate to **"Open New Account"**
- Submit the form to open an account
- Assert that:
  - The UI confirms the account was opened
  - The network request for opening an account returns a successful response (use `cy.intercept`) Look up this command on the official Cypress documentation page. Get stuck just ask me whenever.

> 💡 You will need to inspect the request using Cypress DevTools network tab to get the correct URL and response details.

---

### 2. Run the test

Ensure the test passes consistently.

---

### 3. Commit your work

git add -p
confirm the files you wish to add with y/n
git commit -m “a message describing your changes”

---

## ✅ Completion Checklist

- [ ] Wrote Cypress test to log in and open a new account
- [ ] Validated both the UI and the intercepted network response
- [ ] Committed code
- [ ] Git push

---
