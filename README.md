# Jeffrey Huang’s personal website

A static academic website for [feverdreme.github.io](https://feverdreme.github.io/), built with HTML, CSS, and a small progressively enhanced project filter. No dependencies or build step are required.

## Edit

- `docs/index.html`: biography, research, experience, teaching, and writing.
- `docs/projects.html`: project descriptions and links.
- `docs/writing.html`: expository papers, research reports, and presentations.
- `docs/research/type-inference.html`: type-inference project overview.
- `docs/assets/style.css`: responsive layout and typography.
- `docs/assets/projects.js`: accessible project filters. All projects remain readable without JavaScript.
- `docs/assets/`: profile photo, CV, and presentation materials.

## Preview

From this directory:

```sh
python3 -m http.server 8765 --directory docs --bind 127.0.0.1
```

Open `http://127.0.0.1:8765`.

## Publish

GitHub Pages serves the `docs/` directory from `main`. Push changes to `main` to update the site. `.nojekyll` keeps the files as plain static assets.

The photo is Jeffrey’s GitHub profile photo. The CV is copied from the existing CV output. Research summaries follow the CV and research reports; project descriptions are grounded in repository documentation and contributions. Work samples are PDF exports from Jeffrey’s Overleaf and Google Slides projects, with coauthors credited. The type-inference presentation contains selected slides, omitting duplicate/skipped explanations and editing notes.
