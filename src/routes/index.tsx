import { createResource } from "solid-js";
const DEVCENTR_DOCS = "https://github.com/dev-centr/devcentr/blob/main/docs/modules/publishing/pages/antora-deployment.adoc";

export default function Home() {
  const [templates] = createResource(() =>
    fetch("/api/templates").then((r) => r.json())
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Workflow templates store</h1>
      <p>
        Full workflow files to copy. Not GitHub Marketplace actions (those are steps you call with inputs).
        GitHub has not added a real community workflow-templates feature. This site is the workaround.
      </p>
      <p>
        <a href={DEVCENTR_DOCS} target="_blank" rel="noopener noreferrer">
          Docs: GitHub Actions templates vs Marketplace (DevCentr)
        </a>
      </p>
      <h2>Templates</h2>
      {templates.loading && <p>Loading…</p>}
      {templates.error && <p>Error loading templates.</p>}
      {templates() && (
        <ul>
          {(templates() as { id: string; name: string; source: string }[]).map((t) => (
            <li>
              <strong>{t.name}</strong> ({t.source})
            </li>
          ))}
        </ul>
      )}
      <p>
        <a href="/submit">Submit your repo as a template</a> (GitHub login required).
      </p>
    </div>
  );
}
