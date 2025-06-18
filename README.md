# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The site is configured to be deployed to GitHub Pages automatically using GitHub Actions.

### Manual Deployment

If you need to deploy manually, you can use one of these methods:

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

This will build the website and push it to the `gh-pages` branch of your GitHub repository.

### Automatic Deployment with GitHub Actions

This repository is set up with GitHub Actions workflows that will automatically deploy the site to GitHub Pages when you push to the main branch.

To enable GitHub Pages:
1. Go to your repository settings on GitHub
2. Navigate to "Pages" section
3. Select "GitHub Actions" as the source
4. Push to the main branch to trigger a deployment
# agBetter
