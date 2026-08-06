<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<div align="center">
  <h1>Workflow templates store</h1>
  <p>A small site to browse full workflow templates (files you copy), not GitHub Marketplace actions.</p>
  <p>
    <a href="https://github.com/dev-centr/devcentr/blob/main/docs/modules/knowledge-base/pages/reference/github-actions-templates-vs-marketplace.adoc">Explore the docs</a>
    ·
    <a href="https://github.com/dev-centr/workflow-templates-site/issues">Report Bug</a>
    ·
    <a href="https://github.com/dev-centr/workflow-templates-site/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

GitHub has neglected to add a real community workflow-templates feature; this site is the workaround.

- **Browse:** Default workflows (e.g. Static HTML) and community-registered templates.
- **API:** `GET /api/templates` returns a JSON list for use by the DevCentr app or other clients.
- **Submit:** (Planned) Connect with GitHub to register your repo as a template.
- **Docs:** We link to DevCentr docs so the same content is not kept in two places. Main doc: [GitHub Actions: Templates vs Marketplace](https://github.com/dev-centr/devcentr/blob/main/docs/modules/knowledge-base/pages/reference/github-actions-templates-vs-marketplace.adoc).

### Domain name

Do **not** use "GitHub" in the site domain. Using a trademark in a domain can be legally risky. Use a neutral name (e.g. workflow-templates.example.com).

## Installation

```bash
pnpm install
```

### Antora docs and Netlify

The repo includes Antora docs in `docs/`. The docs site is built and deployed to Netlify:

- **Netlify (dashboard):** Connect this repo in Netlify; it will use `netlify.toml` (build: `pnpm dlx antora antora-playbook-docs.yml`, publish: `build/site`).
- **GitHub Actions:** The workflow `.github/workflows/docs.yml` builds Antora on push/PR and deploys to Netlify on `main`. Add repo secrets in GitHub:
  - `NETLIFY_AUTH_TOKEN` — Personal Access Token from Netlify (Site settings → Build & deploy → Build hooks / API).
  - `NETLIFY_SITE_ID` — Site ID from Netlify (Site settings → General → Site information).

After the first deploy, set the Netlify site URL in `antora-playbook-docs.yml` (`site.url`) if you use a custom domain.

## Usage

```bash
pnpm dev
```

Build Antora docs: `pnpm dlx antora antora-playbook-docs.yml` (output in `build/site`).

### Docs subdomain

The site can use a docs subdomain (e.g. docs.yourdomain.com). Options:

- **Link to DevCentr:** Point users to DevCentr docs so you maintain content in one place. Reader POV may assume DevCentr; if that feels skewed, add a short intro on the templates site.
- **Antora that includes DevCentr:** Run an Antora site that pulls in pages from the DevCentr repo (via content source). One build, one doc set. Worth trying; if the tone feels wrong for template-only readers, split later.

### Tech

SolidStart (Solid.js), TypeScript. API routes under `src/routes/api/`.

## Contact

DevCentr.org — support@devcentr.org

Project Link: https://github.com/dev-centr/workflow-templates-site

Site: https://devcentr.org

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/dev-centr/workflow-templates-site.svg?style=for-the-badge
[contributors-url]: https://github.com/dev-centr/workflow-templates-site/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dev-centr/workflow-templates-site.svg?style=for-the-badge
[forks-url]: https://github.com/dev-centr/workflow-templates-site/network/members
[stars-shield]: https://img.shields.io/github/stars/dev-centr/workflow-templates-site.svg?style=for-the-badge
[stars-url]: https://github.com/dev-centr/workflow-templates-site/stargazers
[issues-shield]: https://img.shields.io/github/issues/dev-centr/workflow-templates-site.svg?style=for-the-badge
[issues-url]: https://github.com/dev-centr/workflow-templates-site/issues
