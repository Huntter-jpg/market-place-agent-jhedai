#!/usr/bin/env node
/**
 * Checks that the deployed site matches a local build of the current commit.
 *
 *   npm run build && npm run check:prod
 *
 * Exits non-zero when production is not this commit.
 *
 * Two things this deliberately does NOT compare:
 *
 *  - Next's JS chunk filenames. Their hashes depend on the directory the
 *    build ran in, so a Cloudflare Pages build never reproduces a local
 *    one's chunk names even from the identical commit. Comparing them
 *    reports a mismatch every time. The CSS bundle hash is content-only
 *    and does reproduce, so that one is compared exactly.
 *
 *  - Raw HTML. Cloudflare rewrites mailto: links at the edge for email
 *    obfuscation, so the served HTML never matches the build byte for byte.
 *    Visible text is compared instead, with those rewrites normalised away.
 */
import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";

const SITE =
  process.env.SITE_URL ??
  readFileSync("src/lib/site.ts", "utf8").match(/"(https?:\/\/[^"]+)"/)?.[1];

if (!SITE) die(2, "Could not determine the site URL.");
if (!existsSync("out/index.html")) die(2, "No build found. Run `npm run build` first.");

/** Routes to compare. Every page in the export, derived from the build. */
const ROUTES = ["/", "/agentes", ...agentRoutes()];

const sha = (b) => createHash("sha256").update(b).digest("hex").slice(0, 16);

/** Visible text, normalised so edge rewrites and asset hashes do not matter. */
const text = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    // Cloudflare replaces each mailto: with an obfuscated span; drop both sides.
    .replace(/<span class="__cf_email__"[\s\S]*?<\/span>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[\w.+-]+@[\w-]+\.[\w.]+/g, " ")
    .replace(/&(?:[a-z]+|#\d+);/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

/** Every asset and link the page references, minus what cannot reproduce. */
const refs = (html) =>
  [...new Set(
    [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
      .map((m) => m[1])
      // Chunk filenames are build-directory dependent; the CSS bundle is checked exactly.
      .filter((u) => !/^\/_next\/static\/chunks\//.test(u))
      // Cloudflare rewrites mailto: links at the edge and injects its decoder.
      .filter((u) => !/^\/cdn-cgi\/scripts\//.test(u))
      .map((u) => (/^(?:mailto:|\/cdn-cgi\/l\/email-protection)/.test(u) ? "mailto:" : u)),
  )].sort();

let failed = false;

// 1. The CSS bundle, compared byte for byte.
const cssPath = readFileSync("out/index.html", "utf8")
  .match(/\/_next\/static\/css\/[\w.-]+\.css/)?.[0];
if (!cssPath) die(2, "No CSS bundle found in the build.");

const cssRes = await fetch(SITE + cssPath);
if (!cssRes.ok) {
  failed = true;
  console.error(`✗ css  ${cssPath} is not served (${cssRes.status}) — production was built from different sources`);
} else {
  const local = sha(readFileSync(`out${cssPath}`));
  const live = sha(Buffer.from(await cssRes.arrayBuffer()));
  if (local === live) console.log(`✓ css  ${cssPath.split("/").pop()} (${local})`);
  else {
    failed = true;
    console.error(`✗ css  differs: local ${local}, live ${live}`);
  }
}

// 2. Rendered text of every route.
for (const route of ROUTES) {
  const file = route === "/" ? "out/index.html" : `out${route}.html`;
  if (!existsSync(file)) continue;
  const res = await fetch(SITE + route, { headers: { "cache-control": "no-cache" } });
  if (!res.ok) {
    failed = true;
    console.error(`✗ ${route} returned ${res.status}`);
    continue;
  }
  const localHtml = readFileSync(file, "utf8");
  const liveHtml = await res.text();
  let ok = true;

  // Visible copy.
  const lt = text(localHtml), vt = text(liveHtml);
  if (lt !== vt) {
    ok = false;
    const l = lt.split(" "), v = vt.split(" ");
    const at = l.findIndex((w, i) => w !== v[i]);
    console.error(`✗ ${route} text differs`);
    if (at >= 0) {
      console.error(`     built: …${l.slice(Math.max(0, at - 6), at + 6).join(" ")}…`);
      console.error(`     live:  …${v.slice(Math.max(0, at - 6), at + 6).join(" ")}…`);
    }
  }

  // Referenced assets and links — catches swapped images, which text alone misses.
  const lr = refs(localHtml), vr = refs(liveHtml);
  const onlyBuilt = lr.filter((u) => !vr.includes(u));
  const onlyLive = vr.filter((u) => !lr.includes(u));
  if (onlyBuilt.length || onlyLive.length) {
    ok = false;
    console.error(`✗ ${route} references differ`);
    for (const u of onlyBuilt) console.error(`     built, not served: ${u}`);
    for (const u of onlyLive) console.error(`     served, not built: ${u}`);
  }

  if (ok) console.log(`✓ ${route}`);
  else failed = true;
}

// 3. Standalone files the export emits.
for (const name of ["robots.txt", "sitemap.xml"]) {
  if (!existsSync(`out/${name}`)) continue;
  const res = await fetch(`${SITE}/${name}`);
  const live = res.ok ? await res.text() : null;
  if (live === readFileSync(`out/${name}`, "utf8")) console.log(`✓ /${name}`);
  else {
    failed = true;
    console.error(`✗ /${name} ${res.ok ? "differs from the build" : `is not served (${res.status})`}`);
  }
}

if (failed) {
  console.error(`\nProduction is not this commit. Redeploy, or find out what is live.`);
  process.exit(1);
}
console.log(`\n${SITE} matches the local build.`);

function agentRoutes() {
  const src = existsSync("src/data/agents.ts") ? readFileSync("src/data/agents.ts", "utf8") : "";
  return [...src.matchAll(/^\s{4}id:\s*"([^"]+)"/gm)].map((m) => `/agentes/${m[1]}`);
}

function die(code, msg) {
  console.error(msg);
  process.exit(code);
}
