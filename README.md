# Jeffrey Huang’s personal website

An Astro site with Markdown content and plain CSS. It produces static HTML for GitHub Pages, with a small JavaScript project filter.

## Run locally

Use a Node.js version supported by the `engines` field in `package.json` and pnpm 10.25.0, pinned in the `packageManager` field.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://127.0.0.1:8765/](http://127.0.0.1:8765/). Content and style edits update the preview automatically. Astro’s development server can be stopped with `pnpm exec astro dev stop`.

## Edit content

| What to change | Where to edit |
| --- | --- |
| Biography, name, email, GitHub, CV, photo, and update label | `src/content/profile/jeffrey.md` |
| Research and personal projects | `src/content/projects/*.md` |
| Papers, reports, slides, and documentation | `src/content/writing/*.md` |
| Internship descriptions | `src/content/experience/*.md` |
| Teaching and education | `src/content/teaching/*.md` |
| Projects/writing page introductions | `src/content/pages/*.md` |
| Colors, fonts, spacing, and responsive layout | `src/styles/global.css` |
| Photos, PDFs, and favicon | `public/assets/` |

Each Markdown file begins with YAML metadata between `---` lines. The Markdown body holds the text. Content collections validate the metadata during checks and builds.

### Projects

A project has one file, even when it appears in research, the catalog, the homepage, and a detailed overview. Ordering fields control placement:

- `catalogOrder`: show it in the full project catalog.
- `featuredOrder`: show it among the homepage’s featured projects.
- `researchOrder`: show it in the homepage research section.
- `detail: true`: generate `/research/<filename>.html` from its Markdown body.

The body is the catalog description for a short project, or the full write-up for a detailed project. A detailed project uses `summary` for its catalog excerpt. Optional `featuredSummary` and `researchSummary` preserve shorter text for the homepage. All of these live together in the project’s file.

For example, `src/content/projects/code-embeddings.md` controls the code-embeddings entry on all three pages. The full project body is normal Markdown, with headings and lists.

To add a simple catalog project, create a file such as `src/content/projects/new-project.md`:

```md
---
title: "New project"
url: "https://github.com/feverdreme/example"
catalogOrder: 25
categories:
  - "tools"
technologies:
  - "Python"
---

Explain what the project does and what you built.
```

Supported categories are `languages`, `ai`, `tools`, and `web`. Leave `url` out for a project with no public destination. Use `/assets/filename.pdf` for a local PDF link.

### Writing and experience

Writing entries use `section: exposition`, `reports`, or `slides`, plus `order` for placement. `homeOrder` optionally features an entry on the homepage. The PDF path, authors/context, summary, and optional homepage excerpt stay in that entry’s file.

Experience and teaching entries have a title, a context/date line (`meta`), and an `order`. Their descriptions and bullet points are ordinary Markdown.

## Edit layouts

- `src/layouts/Base.astro`: shared metadata, navigation, contact details, and footer.
- `src/components/`: project, research, writing, experience, and link components.
- `src/pages/`: homepage, catalog, writing list, and the generated research route.
- `src/content.config.ts`: content schemas.
- `src/scripts/projects.js`: progressively enhanced project filters; all projects remain readable without JavaScript.

## Check and build

```sh
pnpm check
pnpm build
pnpm check:links
```

The production files are generated in `dist/`. Do not edit that directory. To inspect the production build, stop the development server and run `pnpm preview`.

The original URLs are retained: `/projects.html`, `/writing.html`, and `/research/<name>.html`. All photos and PDFs are copied unchanged from `public/` into the build.

## Publication

The public site is hosted at https://feverdreme.github.io/ from the `feverdreme/feverdreme.github.io` repository. Publication was authorized by Jeffrey on November 6, 2026.

GitHub Pages serves the built files from the root of the `gh-pages` branch. There is no custom GitHub Actions workflow. Source lives on `main`; publishing requires running `pnpm check`, `pnpm build`, and `pnpm check:links` locally, then committing the contents of `dist/` to `gh-pages`. Include `.nojekyll` in the published files. Pushing source changes to `main` alone does not update the public site.
