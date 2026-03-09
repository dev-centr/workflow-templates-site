# Workflow templates store

A small site to browse **full workflow templates** (files you copy), not GitHub Marketplace actions (steps you call with inputs). GitHub has neglected to add a real community workflow-templates feature; this site is the workaround.

- **Browse:** Default workflows (e.g. Static HTML) and community-registered templates.
- **API:** `GET /api/templates` returns a JSON list for use by the DevCentr app or other clients.
- **Submit:** (Planned) Connect with GitHub to register your repo as a template.
- **Docs:** We link to DevCentr docs so the same content is not kept in two places. Main doc: [GitHub Actions: Templates vs Marketplace](https://github.com/dev-centr/devcentr/blob/main/docs/modules/knowledge-base/pages/reference/github-actions-templates-vs-marketplace.adoc).

## Domain name

Do **not** use "GitHub" in the site domain. Using a trademark in a domain can be legally risky. Use a neutral name (e.g. workflow-templates.example.com).

## Run locally

```bash
pnpm install
pnpm dev
```

## Docs subdomain

The site can use a docs subdomain (e.g. docs.yourdomain.com). Options:

- **Link to DevCentr:** Point users to DevCentr docs so you maintain content in one place. Reader POV may assume DevCentr; if that feels skewed, add a short intro on the templates site.
- **Antora that includes DevCentr:** Run an Antora site that pulls in pages from the DevCentr repo (via content source). One build, one doc set. Worth trying; if the tone feels wrong for template-only readers, split later.

## Tech

SolidStart (Solid.js), TypeScript. API routes under `src/routes/api/`.
