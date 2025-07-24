# 🎁 Bonus Challenge: ESLint, Prettier & .gitignore Setup

## 🎯 Objective

Set up code quality tools for the Cypress project by configuring ESLint and Prettier, and ensuring `node_modules` and other common files are ignored via `.gitignore`.

---

## 🧰 Prerequisites

- A working Cypress project with `package.json`
- Pulled this branch
- Prepared to google everything that doesn't make sense

---

## 📝 Task Instructions

### 1. Install ESLint and Prettier

Install the required dev dependencies for ESLint and Prettier:

- `eslint`
- `prettier`
- `eslint-config-prettier`
- `eslint-plugin-cypress`
- Optionally: `eslint-plugin-import`

> 💡 You can use the ESLint CLI (`npx eslint --init`) to help scaffold your config if needed.

---

### 2. Create Config Files

- Create an `.eslintrc` or `eslint.config.js` file and configure basic rules, including Cypress as an environment.
- Create a `.prettierrc` or `.prettierrc.json` file with your preferred formatting rules (e.g., 2 spaces, semicolons, etc.).
- Add a `.prettierignore` file if needed.

---

### 3. Update `.gitignore`

Ensure `.gitignore` includes at least the following:
node_modules
dist
.env
coverage
.DS_Store

---

### 4. Add NPM Scripts

Update `package.json` with scripts like:

```json
"scripts": {
  "lint": "eslint . --ext .js,.ts",
  "format": "prettier --write ."
}

---

### 5. Update the settings.json with format on save

I have added a folder called .vscode in which there is a file `settings.json`

- Add an option that will formatOnSave

---

### 6. Commit your changes

- git add .
- git commit -m "describe your changes"


## ✅ Completion Checklist

- [ ] Installed ESLint, Prettier, and Cypress plugin
- [ ] Created config files for ESLint and Prettier
- [ ] Updated .gitignore to exclude node_modules and others
- [ ] Added lint and format scripts to package.json
- [ ] Tested the new scripts
- [ ] Checked if you have Prettier and ES Lint VS Code extensions installed
- [ ] Updated your vs code settings.json
- [ ] Committed and pushed changes

---
