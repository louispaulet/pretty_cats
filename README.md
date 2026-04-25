# pretty_cats

Pretty Cats is a playful Vite + React website that ranks cat photos from prettiest to ugliest using OpenAI CLIP. The result is a lightweight, data-driven gallery that mixes machine learning, photography, and a very serious cat competition.

The live site is published at [pretty-cats.thefrenchartist.dev](https://pretty-cats.thefrenchartist.dev).

## What The App Does

- Shows the `Top 10 Cats` and `Worst 10 Cats` side by side.
- Displays each cat's image number, rank position, and prettiness score.
- Includes an About page that explains the CLIP-based scoring approach.

## How It Works

The app reads precomputed CSV data from `pretty_cats/public/` and uses the `image_url` field to render each cat image.

The ranking logic behind the project uses two reference prompts:

- `picture of an ugly cat`
- `picture of a pretty cat`

For each image, CLIP compares the image against those prompts, then the app applies a softmax-style scoring step to produce a prettiness score. That is what powers the ranked homepage view.

## Data And Images

- Cat score tables live in `pretty_cats/public/cats_ordered_by_prettiest.csv` and `pretty_cats/public/9k_cats_multi_scores.csv`.
- Images are served from the public Google Cloud Storage bucket `pretty_cats`.
- Public image URLs follow this pattern:

```text
https://storage.googleapis.com/pretty_cats/image_<n>.jpg
```

## Repo Layout

- `pretty_cats/` contains the Vite app, components, pages, and static assets.
- `Makefile` provides convenient root-level commands for local work and deployment.
- `AGENTS.md` contains repo-specific working instructions for Codex.

## Local Development

```bash
cd pretty_cats
npm install
npm run dev
```

Or from the repository root:

```bash
make up
```

## Common Commands

- `make up` starts the local dev server.
- `make build` creates a production build.
- `make lint` runs ESLint.
- `make test` runs `lint` and `build`.
- `make deploy` builds and publishes the site with `gh-pages`.

## Npm Scripts

Inside `pretty_cats/`:

- `npm run dev` starts the Vite dev server.
- `npm run build` creates a production build.
- `npm run preview` previews the production build locally.
- `npm run lint` runs ESLint.
- `npm run deploy` publishes the built site to GitHub Pages.

## Notes

- The site uses React Router for the Home and About pages.
- The app is intentionally simple: the interesting part is the CLIP-based ranking data and the public cat gallery it powers.
