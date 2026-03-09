import type { APIEvent } from "@solidjs/start/server";

/** Minimal Antora to GitHub Pages workflow for install. */
const ANTORA_PAGES_YAML = `# Antora build + deploy to GitHub Pages (Root Strategy).
name: Docs

on:
  push:
    branches: [main]
    paths:
      - 'docs/**'
      - 'antora-playbook.yml'
      - '.github/workflows/docs.yml'
  pull_request:
    branches: [main]
    paths:
      - 'docs/**'
      - 'antora-playbook.yml'
      - '.github/workflows/docs.yml'
  workflow_dispatch:
  repository_dispatch:
    types: [extension-updated]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9
      - name: Build docs
        run: pnpm dlx antora antora-playbook.yml
      - name: Upload site
        uses: actions/upload-pages-artifact@v4
        with:
          path: build/site
  deploy:
    if: github.ref == 'refs/heads/main' && github.event_name != 'pull_request'
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: \${{ steps.deploy.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deploy
        uses: actions/deploy-pages@v4
`;

/** Static HTML to GitHub Pages (minimal). */
const STATIC_HTML_YAML = `# Static HTML to GitHub Pages
name: Deploy static to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deploy.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v4
        with:
          path: .
      - name: Deploy to GitHub Pages
        id: deploy
        uses: actions/deploy-pages@v4
`;

const TEMPLATES: Record<string, { name: string; filename: string; content: string }> = {
  "antora-pages": { name: "Antora to GitHub Pages", filename: "docs.yml", content: ANTORA_PAGES_YAML },
  static: { name: "Static HTML", filename: "static-pages.yml", content: STATIC_HTML_YAML },
};

export async function GET({ params }: APIEvent) {
  const id = params?.id;
  if (!id || !TEMPLATES[id]) {
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404, headers: { "Content-Type": "application/json" } });
  }
  const t = TEMPLATES[id];
  return new Response(
    JSON.stringify({ id, name: t.name, filename: t.filename, content: t.content }),
    { headers: { "Content-Type": "application/json" } }
  );
}
