# [Human Design Pro Firmy](https://humandesignprofirmy.cz) Website

Disclaimer: *Human Design is an ideology and something that I do NOT subscribe to.* 😂 *Getting that out of the way...*

## What is this?

This is mostly a frontend website built with Astro and React. It's using Cockpit CMS as a headless CMS. For the backend part, there's one API endpoint that's used to send emails. **The website is fully SSR and needs a Nodejs server to run.**

## How to run it?
| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build production site to `./dist/`          		 |
| `npm run preview`         | Preview build locally, before deploying          |

## How to deploy it?
I'm using Vercel to deploy this website. It's connected to this GitHub repository and it automatically builds and deploys the website whenever I push to the `main` branch.

IMPORTANT: You need to set up the following environment variables in Vercel:
```text
COCKPIT_API_KEY
COCKPIT_REST_URL
COCKPIT_GRAPHQL_URL
GOOGLE_APP_SCRIPT_ID
```

## Project structure
```text
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── css/
│   ├── interfaces
│   ├── layouts/
│   ├── lib/
│   └── pages/
│       ├── api/
│       ├── blog/
│       └── index.astro
│       ...
|   ├── queries/
└── package.json
```

Astro looks for `.astro` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where I like to put any Astro/React components.

For the blog posts, I'm using dynamic routes, like `blog/[page].astro` and `/blog/clanek/[id].astro`.

## Additional libraries
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Hook Form](https://react-hook-form.com/) for forms
- [Framer Motion](https://www.framer.com/motion/) for animations

## To Do:
1. SEO
2. Blog pagination and category routes
3. Rate limiting and error handling for the API endpoint
4. Take advantage of Astro features for images and implement island structure