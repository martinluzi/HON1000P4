# Pensumtorget UiO

A static MVP prototype for a UiO syllabus-book marketplace.

## Run locally

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/`.

## Host on GitHub Pages

This project is a plain static site. GitHub Pages can serve it directly from the repository root.

1. Create a new GitHub repository.
2. Push this folder to the repository.
3. In GitHub, open `Settings` -> `Pages`.
4. Set `Source` to `Deploy from a branch`.
5. Select branch `main` and folder `/root`.
6. Save. GitHub will publish the site at `https://<username>.github.io/<repo-name>/`.

The prototype stores favourites, listings, and messages in browser `localStorage`, so that data is local to each browser and is not shared between visitors.
