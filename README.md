```markdown
# 🌐 DCW UI Ecosystem Monorepo

![Logo](https://github.com/user-attachments/assets/b31f5356-4543-43b8-8b69-5750c6087d8d)

This **Nx** workspace (`functions-dcw-ui-ecosystem`) houses our shared UI libraries and SPFx WebParts for the DCW UI Center of Excellence:

- **Theme** (`dcw-react-theme`)  
- **Typography** (`dcw-react-typography`)  
- **Atoms** (`dcw-react-atoms`)  
- **Organisms** (e.g. `dcw-react-organisms-hero-banner`)  
- **SPFx WebParts** (`dcw-spfx-webparts`)  

---

## 📋 Table of Contents

1. [Getting Started](#getting-started)  
2. [Project Structure](#project-structure)  
3. [Workspace Commands](#workspace-commands)  
4. [Adding a New Library](#adding-a-new-library)  
5. [Testing & Linting](#testing--linting)  
6. [Storybook](#storybook)  
7. [Publishing](#publishing)  
8. [Contributing](#contributing)  
9. [License](#license)

---

## 🚀 Getting Started

```bash
git clone git@github.com:your-org/functions-dcw-ui-ecosystem.git
cd functions-dcw-ui-ecosystem
npm install

## 🗂 Project Structure

```bash
.
├─ apps/                  # Demo apps & SPFx solution
│  ├─ dcw-demo-app/
│  └─ dcw-spfx-webparts/
└─ libs/                  # Publishable libraries
   ├─ dcw-react-theme/
   ├─ dcw-react-typography/
   ├─ dcw-react-atoms/
   └─ dcw-react-organisms/

Each library has:

src/lib/ — source code

src/lib/*.styles.ts — Griffel styles

src/lib/*.types.ts — TS interfaces & props

src/lib/*.spec.tsx — unit tests

src/lib/*.stories.tsx — Storybook stories

project.json — build/test/lint config

README.md & CONTRIBUTING.md

---

## 💻 Workspace Commands

| Command                      | Description                         |
| ---------------------------- | ----------------------------------- |
| `nx serve <app>`             | Run dev server for demo app or SPFx |
| `nx build <project>`         | Build any lib or app                |
| `nx test <project>`          | Run Jest tests                      |
| `nx lint <project>`          | Run ESLint                          |
| `nx run <project>:storybook` | Spin up Storybook for a lib         |
| `nx format:write`            | Auto-format all code                |

## ➕ Adding a New Library

# Example: new React atom
nx generate @nx/react:library my-component \
  --directory=dcw-react-atoms \
  --importPath=@functions/dcw-react-atoms-my-component \
  --buildable \
  --publishable \
  --style=css \
  --unitTestRunner=jest

Don’t forget to:

Add README.md & CONTRIBUTING.md

Update tsconfig.base.json paths

Write tests & stories

