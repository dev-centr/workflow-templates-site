import type { APIEvent } from "@solidjs/start/server";

/** GitHub’s default starter workflows we can list (or fetch later). */
const DEFAULT_TEMPLATES = [
  { id: "static", name: "Static HTML", source: "GitHub" },
  { id: "antora-pages", name: "Antora to GitHub Pages", source: "Community" },
];

/** Custom templates (later: from DB). */
const CUSTOM_TEMPLATES: { id: string; name: string; source: string; repo?: string }[] = [];

export async function GET(_event: APIEvent) {
  const list = [...DEFAULT_TEMPLATES, ...CUSTOM_TEMPLATES];
  return new Response(JSON.stringify(list), {
    headers: { "Content-Type": "application/json" },
  });
}
