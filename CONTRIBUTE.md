Contributing
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

# 🤝 Contributing to the DCW UI COE Libraries

Thank you for helping build a robust, maintainable design system!  
This document focuses on **code standards** and best practices to follow when contributing to any of our libraries (Theme, Typography, Atoms, Organisms, SPFx).

---

## 📐 1. TypeScript & Typing Guidelines

1. **Strict Mode**  
   - Keep `"strict": true` in `tsconfig.json`.  
   - No `// @ts-ignore`, no implicit `any`.

2. **Avoid `any`**  
   - Use precise types: `Record<string, T>`, `unknown` + narrowing, generics.

3. **Interfaces vs. Types**  
   - Use `interface` for public APIs (component props, tokens).  
   - Use `type` for union/composite types (e.g. `type HeroLayout = …`).

4. **Readonly & Immutability**  
   - Mark token maps or config objects `readonly`:  
     ```ts
     export const breakpoints: Readonly<Record<BreakpointKey, number>> = { … };
     ```

5. **Keyof & Indexing**  
   - When looking up by string keys, constrain with `keyof`:  
     ```ts
     function getToken<K extends keyof ThemeTokens>(key: K): ThemeTokens[K] { … }
     ```

---

## ⚛️ 2. React & Component Architecture

1. **PascalCase for Components & Hooks**  
   - `HeroBanner`, `useThemeStaticStyles`, `CustomButton`.

2. **Props Interface**  
   - Name it `<ComponentName>Props` and export it if public.  
     ```ts
     export interface ButtonProps { … }
     export const Button: React.FC<ButtonProps> = (…) => { … }
     ```

3. **FC vs. Function**  
   - Prefer `React.FC<Props>` only if you need `children`; otherwise plain function is fine.

4. **Destructure Props**  
   - At the function signature:  
     ```ts
     function TextInput({ placeholder, value, onChange }: TextInputProps) { … }
     ```

5. **Memoization & Refs**  
   - Use `React.useMemo` / `React.useCallback` for expensive calculations or stable callbacks.  
   - Use `useRef` for DOM refs, avoid needless re-renders.

6. **No Inline Functions in JSX**  
   - Pass event handlers or memoized callbacks, not `onClick={() => doSomething()}` every render.

---

## 🎨 3. Styling & Griffel Patterns

1. **Static-Only `makeStyles`**  
   - Griffel v1 supports only plain objects:  
     ```ts
     const useStyles = makeStyles({
       root: { display: 'flex', … },
     });
     ```

2. **Dynamic Styles via Inline `style`**  
   - Compute per-instance values in the component and pass via `style={…}` or CSS vars.

3. **CSS Custom Properties**  
   - Expose design tokens as `--spacing-md`, `--color-brandPrimary`.  
   - Consume them in Griffel: `padding: 'var(--spacing-md)'`.

4. **Slot Naming**  
   - In `makeStyles<Slots>`: `Slots = 'root' | 'overlay' | 'content' | …`.

5. **No SCSS Modules**  
   - All component-scoped styles live in Griffel; only global resets may use a single `global.scss`.

---

## 🔗 4. Theming & Tokens

1. **Single Source of Truth**  
   - All tokens (colors, spacing, breakpoints, presets) live in `dcw-react-theme`.

2. **Token Types**  
   - Define a `ThemeTokens` interface and use it for overrides:  
     ```ts
     export interface ThemeTokens {
       colors: Record<ColorKey, string>;
       spacing: Record<SpacingKey, number>;
     }
     ```

3. **`ThemeProvider` Usage**  
   - Merge Fluent UI theme + inject CSS vars + provide context.

4. **Hook-Based Consumption**  
   - `useThemeStaticStyles()` for global CSS-vars.  
   - `useTypographyStyles(preset)` for typography tokens.

---

## 📁 5. File Structure & Naming Conventions

1. **File Names**  
   - Components: `PascalCase.tsx`.  
   - Styles & types: same base name with `.styles.ts` / `.types.ts`.

2. **Index Barrels**  
   - Export only public APIs from `src/index.ts`.

3. **Separation of Concerns**  
   - Styles, types, tests, stories co-located with component code.

---

## ✅ 6. Testing & Quality Assurance

1. **Jest + React Testing Library**  
   - Tests in `*.spec.tsx` next to component.

2. **Coverage Target**  
   - Minimum 80% on new code.

3. **Accessibility Tests**  
   - Use `axe` or `jest-axe` in unit tests for key components.

4. **No Snapshot-Mass**  
   - Use snapshots sparingly; prefer querying DOM and asserting semantics.

---

## ♿️ 7. Accessibility

1. **Semantic HTML**  
   - Use `<button>`, `<nav>`, `<main>`, etc., not `<div role="button">`.

2. **ARIA Attributes**  
   - Only when native semantics are insufficient.

3. **Keyboard Navigation**  
   - Ensure focus styles, `tabIndex`, and `onKeyDown` handlers.

4. **Contrast Ratios**  
   - All color tokens meet WCAG AA at minimum.

---

## 📖 8. Documentation & Storybook

1. **Component Stories**  
   - One story per variant in `*.stories.tsx`, using CSF format.

2. **ArgTypes & Controls**  
   - Document all props with descriptions and control types.

3. **README Updates**  
   - When adding a new component or token, update that library’s `README.md`.

---

## 🔧 9. Commit Messages & Branching

1. **Branch Names**  
   - `feature/…`, `bugfix/…`, `release/…`.

2. **Conventional Commits**  
   - `<type>(<scope>): <summary>`  
     - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

3. **PR Template**  
   - Link to issue, describe changes, include screenshots if applicable.

---

## 📦 10. Release & Publishing

1. **Versioning**  
   - Use semantic versioning with `npm version patch|minor|major`.

2. **Build**  
   ```bash
   nx build <project>