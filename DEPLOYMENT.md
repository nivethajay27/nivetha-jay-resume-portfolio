# Deployment

This portfolio is a static HTML, CSS, and JavaScript site. It does not require a build step.

## GitHub Pages

1. Create a GitHub repository for this portfolio.
2. Push the contents of this folder to the repository.
3. In GitHub, open **Settings** > **Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Select the `main` branch and the `/root` folder.
6. Save the settings.

GitHub Pages will publish the site at a URL like:

```text
https://nivethajay27.github.io/repository-name/
```

The `.nojekyll` file is included so GitHub Pages serves the static files directly.

## Netlify

1. Create a new site in Netlify.
2. Connect the GitHub repository, or drag this folder into Netlify.
3. Leave the build command empty.
4. Use the publish directory as the repository root.

## Vercel

1. Import the GitHub repository into Vercel.
2. Leave the framework preset as **Other**.
3. Leave the build command empty.
4. Use the project root as the output directory.

## Local Preview

From this folder, run:

```sh
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```
