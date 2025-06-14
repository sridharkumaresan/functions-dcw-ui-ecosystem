# 🪐 `@functions/dcw-react-theme`

The **Theme** library is the cornerstone of our DCW UI Ecosystem. It centralizes design tokens (colors, spacing, typography breakpoints) and provides:

- **Global CSS variables** for theming  
- Fluent UI theme merging & overrides  
- Shared **bannerColorPresets** & **breakpoints**  
- Utility hooks for injecting static styles  

> ⚙️ Part of the [DCW UI COE initiative](../README.md) — our shared React design system.

---

## Table of Contents

1. [Installation](#installation)  
2. [Getting Started](#getting-started)  
3. [Available Exports](#available-exports)  
4. [Design Tokens](#design-tokens)  
   - [Color Presets](#color-presets)  
   - [Spacing Tokens](#spacing-tokens)  
   - [Breakpoints & Media Queries](#breakpoints--media-queries)  
5. [ThemeProvider](#themeprovider)  
6. [Static Styles Hook](#static-styles-hook)  
7. [Building & Testing](#building--testing)  
8. [Publishing](#publishing)  
9. [Contributing](#contributing)  
10. [License](#license)

## Installation

> From the root of your repo, after you’ve built & published locally via Verdaccio/npm reg:

```bash
npm install @functions/dcw-react-theme

---

Getting Started

Wrap your application (or Storybook) in the ThemeProvider to load:

Fluent UI merged theme

Global CSS variables for tokens

A React ThemeContext for hook-based consumption

```js
import React from "react";
import { ThemeProvider } from "@functions/dcw-react-theme";

export function App() {
  return (
    <ThemeProvider
      colorOverrides={{ brandPrimary: "#FF5722" }}
      spacingOverrides={{ md: 20 }}
      fluentCssVarOverrides={{
        "--colorNeutralStrokeAccessiblePressed": "#FF5722",
      }}
    >
      {/* …your app… */}
    </ThemeProvider>
  );
}

---

Available Exports
`
import {
  ThemeProvider,
  ThemeProviderProps,
  useThemeStaticStyles,
} from "@functions/dcw-react-theme";

// Design tokens
import {
  bannerColorPresets,
  BannerColorPresetKey,
  breakpoints,
  mediaQueries,
} from "@functions/dcw-react-theme";
`
---

## Design Tokens
    - Color Presets
    - Pre-defined background/text combos:

    | Key            | Background | Text      | Contrast |
| -------------- | ---------- | --------- | -------- |
| `stone`        | `#BEC9C9`  | `#00395D` | AAA      |
| `orange`       | `#FFC805`  | `#515151` | AA       |
| `mint`         | `#CDF5E8`  | `#001276` | AAA      |
| `lightTeal`    | `#007481`  | `#AFFDFD` | AA       |
| `brightMint`   | `#AFFDFD`  | `#007481` | AA       |
| `lightBlue`    | `#0076B6`  | `#FFFFFF` | AA       |
| `lightClaret`  | `#FFC9C9`  | `#752157` | AA       |
| `brightClaret` | `#C7237A`  | `#FFFFFF` | AA       |
| `brightPurple` | `#5C15EB`  | `#E1C0E2` | AAA      |

---

## Spacing Tokens

    - Available as CSS variables:

--spacing-xs

--spacing-sm

--spacing-md

--spacing-lg

--spacing-xl

---

## Breakpoints & Media Queries
- Centralized breakpoints:

import { breakpoints, mediaQueries } from "@functions/dcw-react-theme";

console.log(breakpoints.md);      // 768
console.log(mediaQueries.md);     // '@media screen and (min-width: 768px)'

- Use mediaQueries in Griffel:

const useStyles = makeStyles({
  root: {
    display: "block",
    [mediaQueries.md]: {
      display: "flex",
    },
  },
});
---

## ThemeProvider

| Prop                    | Type                               | Default |
| ----------------------- | ---------------------------------- | ------- |
| `fluentThemeOverrides`  | `Partial<FluentTheme>`             | `{}`    |
| `colorOverrides`        | `Partial<ThemeTokens['colors']>`   | `{}`    |
| `spacingOverrides`      | `Partial<ThemeTokens['spacing']>`  | `{}`    |
| `fluentCssVarOverrides` | `Record<string,string>` (CSS vars) | `{}`    |

---

## Static Styles Hook

- useThemeStaticStyles() returns a CSS class that injects default CSS variables.

import { useThemeStaticStyles } from "@functions/dcw-react-theme";

export function Banner() {
  const cssVarsClass = useThemeStaticStyles();
  return <div className={cssVarsClass}>…</div>;
}

---

## Building & Testing

# Build the Theme library
nx build dcw-react-theme

# Run unit tests
nx test dcw-react-theme




