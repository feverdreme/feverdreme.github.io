# Website editing

- This is a static Astro site with Markdown content and plain CSS. Keep dependencies minimal.
- Edit prose and metadata in `src/content/`; reuse those entries in components rather than duplicating content across page templates.
- Contact details are defined once in `src/content/profile/jeffrey.md`. Use Jeffrey’s professional email.
- Preserve the design, original `.html` page URLs, project filter behavior, and PDF/image assets unless the user requests changes.
- Shared layouts and components live in `src/layouts/` and `src/components/`. Styling lives in `src/styles/global.css`.
- `dist/` is generated output. Do not edit or commit it. `public/assets/` holds the original static assets.
- Use pnpm (the version is pinned in `package.json`); keep `pnpm-lock.yaml` as the dependency lockfile. Install with `pnpm install --frozen-lockfile`.
- Validate changes with `pnpm check`, `pnpm build`, and `pnpm check:links`. Use the existing local preview at port 8765.
- **Do not publish, create a public repository, push, or change hosting settings until Jeffrey explicitly authorizes publication.**
