# 🧪 Cypress Challenge 01: Test the Registration Flow

## 🎯 Objective

Use Cypress to write an end-to-end test that verifies a user can register a new account on a public banking demo website. You'll also practice using Git to manage your code and collaborate via pull requests. This is one of the key flows you will have to test for almost any application.

---

## 📝 Task Instructions

### 1. Create a New Branch

Create a new Git branch named: `test/register-user`

---

### 2. Write a Cypress Test

Create a new test file inside your Cypress E2E test folder. Your test should:

- Visit: `https://parabank.parasoft.com/parabank/index.htm`
- Assert the page has successfully loaded
- Click on the **Register** link
- Fill out **all** fields in the registration form
- Submit the form
- Confirm that registration was successful using a suitable assertion

> 💡 You’ll need to inspect the DOM (the element tree in the chrome inspect window) and use appropriate selectors for form fields and buttons. Not all selectors are equal, try to find unique ones.

---

### 3. Run the Test

Use Cypress’s test runner to run your test and ensure it passes without errors and take a screenshot.

---

### 4. Commit Your Work

Commit your new test to your branch with a meaningful message.

---

### 5. Push and Create a Pull Request

Push your branch to GitHub and open a pull request into your `main` or `develop` branch (depending on your project setup).

---

## ✅ Completion Checklist

- [ ] Created `test/register-user` branch
- [ ] Wrote and ran a Cypress test for user registration
- [ ] Confirmed the test passes
- [ ] Committed code with a clear message
- [ ] Opened a pull request on GitHub

---

## 🌟 Bonus Challenge

Update the test to generate a unique username each time, so the test can be run multiple times without failure due to duplicate accounts.

---

Let me know when your pull request is ready — looking forward to reviewing it! 👀💻

## Common GIT commands

Create a new branch

- git checkout -b {branchname}

Change to existing branches

- git checkout {branchname} eg. git checkout main takes you to the main branch

Stage an entire file based on the path

- git add {filename}

Stage a file by choosing specifically the changes

- git add -p

Commit your staged files

- git commit -m 'message'

Create a branch

- git push -u origin HEAD - create new branch

Push to branch once it exists

- git push
