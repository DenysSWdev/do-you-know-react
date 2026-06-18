# Setup plan: React + TypeScript + Vite

**Session date:** 2026-06-17  
**Project:** do-you-know-react  
**Status:** In progress — scaffold + lint/format done; testing & Storybook pending

---

## Goal

Minimal React + TypeScript + Vite app with:

- Prettier + ESLint (Biome deferred)
- Vitest + React Testing Library + jsdom + user-event
- Storybook + `@storybook/addon-vitest`

---

## Progress checklist

| Step | Task | Status |
|------|------|--------|
| 1 | Scaffold Vite + React + TS | Done |
| 2 | Clean Vite boilerplate | Done (with minor deviations) |
| 3 | ESLint + Prettier | Done |
| 4 | Vitest + React Testing Library | Not started |
| 5 | Storybook | Not started |
| 6 | Storybook + Vitest addon | Not started |
| 7 | Optional: coverage, husky, path aliases | Not started |

---

## Completed in this session

### Step 1 — Scaffold

- `npm create vite@latest . -- --template react-ts`
- Dependencies installed; `dev` / `build` / `preview` scripts work

### Step 2 — Clean boilerplate

- Demo assets and Vite landing page removed
- Minimal `App.tsx` with project heading
- Clean `index.html` (title: `do-you-know-react`, favicon commented out)
- `main.tsx` kept with `StrictMode`
- Styles split into:
  - `src/styles/reset.css` — CSS reset
  - `src/styles/index.css` — placeholder for app/theme styles (empty `:root` block)

**Deviations from original plan:**

- CSS lives under `src/styles/` instead of a single `src/index.css`
- Folders `src/components/`, `src/hooks/`, `src/test/` not created yet
- `README.md` still contains Vite template content (should be rewritten for this project)

### Step 3 — ESLint + Prettier

- `eslint.config.js` with TypeScript, React Hooks, React Refresh, Prettier integration
- `prettier.config.js`
- Scripts: `lint`, `lint:fix`, `format`, `format:check`

### Agent / tooling setup (bonus)

- `AGENTS.md`, `CLAUDE.md`
- `.agents/skills/deploy/`
- `.cursor/rules/` (project-core, typescript-react)
- `.cursor/mcp.json`, `.claude/settings.json`

---

## Current project structure

```text
do-you-know-react/
├── .agents/
│   ├── plans/
│   └── skills/deploy/
├── .claude/
├── .cursor/
├── src/
│   ├── styles/
│   │   ├── reset.css
│   │   └── index.css
│   ├── App.tsx
│   └── main.tsx
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.js
├── prettier.config.js
├── index.html
├── package.json
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
└── vite.config.ts
```

---

## Next steps (resume here)

### Step 4 — Vitest + React Testing Library

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom \
  @testing-library/user-event jsdom vitest-mock-extended
```

1. Create `src/test/setup.ts`:

   ```ts
   import '@testing-library/jest-dom/vitest'
   ```

2. Update `vite.config.ts`:

   ```ts
   /// <reference types="vitest/config" />
   export default defineConfig({
     plugins: [react()],
     test: {
       globals: true,
       environment: 'jsdom',
       setupFiles: './src/test/setup.ts',
     },
   })
   ```

3. Add `"types": ["vitest/globals"]` to `tsconfig.app.json`

4. Add scripts: `test`, `test:run`, `test:coverage`

5. Create `src/App.test.tsx` (smoke test for heading)

6. Create folders: `src/components/`, `src/hooks/` (if following original plan)

### Step 5 — Storybook

```bash
npm create storybook@latest
```

Choose: React → Vite → TypeScript

### Step 6 — Storybook + Vitest

```bash
npx storybook add @storybook/addon-vitest
```

### Step 7 — Optional

- `@vitest/coverage-v8`
- husky + lint-staged
- Path alias `@/` → `src/` in `vite.config.ts` + `tsconfig.app.json`

### Housekeeping (recommended before or after Step 4)

- [ ] Rewrite `README.md` for this project (replace Vite template text)
- [ ] Run `npm run lint && npm run format:check && npm run build` before next commit

---

## Tool choices (locked in)

| Need | Choice |
|------|--------|
| Lint + format | ESLint + Prettier (not Biome) |
| Test runner | Vitest |
| Component testing | React Testing Library |
| DOM emulation | jsdom |
| User interactions | @testing-library/user-event |
| Typed mocks | vitest-mock-extended (optional) |
| Visual / interaction docs | Storybook + @storybook/addon-vitest |

---

## Resume prompt for agents

> Continue the React + Vite setup for do-you-know-react. Read `.agents/plans/2026-06-17-react-vite-scaffold.md` and start at the first unchecked step (Step 4: Vitest + RTL).
