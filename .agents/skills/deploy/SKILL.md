---
name: deploy
description: Build and verify production output for this Vite React app. Use when deploying, releasing, or validating a production build.
disable-model-invocation: true
---

# Deploy

## When to use

- User asks to deploy or prepare a release
- User wants to verify the production build locally

## Steps

1. Run `npm run lint`
2. Run `npm run build`
3. If the build succeeds, note that output is in `dist/`
4. Offer `npm run preview` for a local smoke test
5. Do not push, publish, or deploy to external hosting unless the user explicitly asks
