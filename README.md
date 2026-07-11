# Nivetha Jayakumar Portfolio

A responsive personal portfolio for Nivetha Jayakumar, built as a standalone static site with HTML, CSS, and JavaScript.

## Overview

The site highlights full-stack engineering, AI-enabled product work, professional experience, selected GitHub projects, education, skills, and resume access.

## Features

- Responsive single-page layout
- Light mode default with a light/dark theme toggle
- Animated hero role text
- Warm illustrated developer workspace hero
- Interactive illustrated About carousel with eight Nivetha versions
- Notebook-style sticky navigation
- Scroll-triggered reveal animations
- Resume download link
- Illustrated experience journey with company checkpoints and resume-detail dialogs
- Illustrated workstation project section with accessible detail panels
- Mobile-friendly project card fallback
- Skills and education sections
- Illustrated mailbox contact section
- Email, GitHub, and LinkedIn links

## Project Structure

```text
.
├── .gitignore
├── .nojekyll
├── assets/
│   ├── nivetha-3d-avatar.jpeg
│   └── nivetha-profile.png
├── tools/
│   └── build.mjs
├── public/
│   └── NivethaJayakumar_Resume.pdf
├── DEPLOYMENT.md
├── README.md
├── index.html
├── package.json
├── script.js
└── styles.css
```

## Local Preview

Run a local server from this folder:

```sh
python3 -m http.server 4173
```

Then visit:

```text
http://localhost:4173
```

## Checks

```sh
npm run lint
npm run build
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for GitHub Pages, Netlify, and Vercel deployment notes.

## Edit points

- `index.html`: name, links, page copy, and section structure
- `script.js`: roles, experience, projects, and skills data
- `styles.css`: visual style and responsive layout
- `tools/build.mjs`: static production build copy step
- `assets/nivetha-3d-avatar.jpeg`: available profile/avatar asset
- `assets/nivetha-profile.png`: available profile photo asset
- `public/NivethaJayakumar_Resume.pdf`: downloadable resume

## Notes

This project contains original portfolio code for Nivetha Jayakumar.
