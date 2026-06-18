/**
 * @agent-maintain — See AGENTS.md for instructions.
 * Last reviewed against: ESLint 10.x, typescript-eslint 8.x, eslint-plugin-react-hooks 7.x (2026-06)
 */

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintPluginPrettierRecommended,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])

// ESLint configuration reference — https://eslint.org/docs/latest/use/configure/
//
// ─── Top-level structure ─────────────────────────────────────────────────────
//
// defineConfig([...])
//   ESLint "flat config" format (ESLint 9+). Each array item is a config object
//   applied to matching files. Later objects can override earlier ones.
//   Docs: https://eslint.org/docs/latest/use/configure/configuration-files
//
// globalIgnores(['dist'])
//   Files and folders ESLint should never lint.
//   Docs: https://eslint.org/docs/latest/use/configure/ignore
//
// ─── Per-block settings ──────────────────────────────────────────────────────
//
// files: ['**/*.{ts,tsx}']
//   Which files this block applies to. Currently all TypeScript and TSX in the project.
//
// extends
//   Preset rule sets merged into this block. Order matters; later presets can
//   override earlier rules. Prettier must stay last.
//   Docs: https://eslint.org/docs/latest/use/configure/configuration-files#using-predefined-configurations
//
// languageOptions.globals: globals.browser
//   Tells ESLint that browser APIs (window, document, etc.) are available.
//   Docs: https://eslint.org/docs/latest/use/configure/language-options#predefined-global-variables
//
// ─── Presets used (extends) ──────────────────────────────────────────────────
//
// js.configs.recommended (@eslint/js)
//   Core JavaScript rules for common bugs and bad patterns.
//   Docs: https://eslint.org/docs/latest/rules/
//
// tseslint.configs.recommended (typescript-eslint)
//   Recommended TypeScript rules (no type-checker required).
//   Docs: https://typescript-eslint.io/users/configs#recommended
//
// reactHooks.configs.flat.recommended (eslint-plugin-react-hooks)
//   Enforces Rules of Hooks and exhaustive-deps for useEffect/useMemo/etc.
//   Docs: https://react.dev/reference/eslint-plugin-react-hooks
//
// reactRefresh.configs.vite (eslint-plugin-react-refresh)
//   Vite HMR rule: React components must be exported so fast refresh works.
//   Docs: https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react-refresh
//
// eslintPluginPrettierRecommended (eslint-plugin-prettier/recommended)
//   Runs Prettier as an ESLint rule and disables conflicting ESLint style rules.
//   Must be last in extends. Requires eslint-config-prettier as a peer dependency.
//   Docs: https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
//
// ─── Optional additions (not configured — add when you need them) ─────────────
//
// globalIgnores — also ignore 'node_modules', 'coverage', etc.
//
// Separate files blocks — e.g. one for src/, one for vite.config.ts with
// globals.node, one for plain .js config files.
//   Docs: https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects
//
// tseslint.configs.recommendedTypeChecked — stricter TS rules powered by tsc.
//   Requires parserOptions.projectService (or project) in languageOptions.
//   Docs: https://typescript-eslint.io/getting-started/typed-linting
//
// tseslint.configs.strict — more opinionated rules on top of recommended.
//   Docs: https://typescript-eslint.io/users/configs#strict
