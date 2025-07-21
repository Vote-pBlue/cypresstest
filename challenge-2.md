# 🧪 Cypress Challenge 02: Verify Navigation Elements

## 🎯 Objective

Test that all key navigation elements on the site are present and correctly configured. This includes checking that links in the sidebar, footer, homepage logo, and main icons all contain valid `href` attributes. This is often referred to as page 'furniture'.

---

## 🧰 Prerequisites

- Cypress should already be installed and working
- Copy the branch name from this PR (pull request) and in your project in terminal or a vscode terminal:

``` bash
git checkout main
git pull
git checkout <copied branch name>
```

You should see the branch name in your terminal prompt

---

## 📝 Task Instructions

### 1. Write a Cypress Test

Your test should:

- Visit the homepage: `https://parabank.parasoft.com/parabank/index.htm`
- Assert that **each sidebar link** has a non-empty `href` attribute
- Assert that **each footer link** has a non-empty `href` attribute
- Assert that the **homepage logo** links to the homepage
- Assert that the **three main homepage icons** (Services, Products, Locations) also have valid links

> 💡 Use meaningful selectors or search based on link text or class names as needed.

---

### 3. Run the test

Use Cypress’s test runner to ensure all assertions pass.

---

### 4. Commit your work

git add -p
confirm the files you wish to add with y/n
git commit -m “a message describing your changes”

---

### 5. Push and open a pull request

Push your branch and create a pull request into your main branch.

---

## ✅ Completion Checklist

- [ ] Checked out (pulled this branch) to your local project
- [ ] Add Cypress test to verify all navigation and icon links
- [ ] Confirmed test passes
- [ ] Committed code
- [ ] git push

---
