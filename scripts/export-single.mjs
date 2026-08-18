import { readFileSync, writeFileSync, existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "out");
const BASE = "/pdg";

function readOutFile(urlPath) {
  let clean = urlPath.split("?")[0];
  if (clean.startsWith(BASE + "/")) clean = clean.slice(BASE.length);
  else if (clean === BASE) clean = "/";
  const filePath = join(outDir, clean.startsWith("/") ? clean.slice(1) : clean);
  return existsSync(filePath) ? readFileSync(filePath) : null;
}

function inlineFonts(css) {
  return css.replace(/url\(['"]?([^'")]+\.(woff2?|ttf|otf))['"]?\)/gi, (match, fontUrl) => {
    const fontPath = join(outDir, fontUrl.startsWith("/") ? fontUrl.slice(1) : fontUrl);
    if (!existsSync(fontPath)) {
      // Try stripping basePath
      const stripped = fontUrl.startsWith(BASE + "/") ? fontUrl.slice(BASE.length) : fontUrl;
      const alt = join(outDir, stripped.startsWith("/") ? stripped.slice(1) : stripped);
      if (!existsSync(alt)) return match;
      const ext = fontUrl.split(".").pop().split("?")[0];
      const mime = ext === "woff2" ? "font/woff2" : ext === "woff" ? "font/woff" : "font/ttf";
      return `url('data:${mime};base64,${readFileSync(alt).toString("base64")}')`;
    }
    const ext = fontUrl.split(".").pop().split("?")[0];
    const mime = ext === "woff2" ? "font/woff2" : ext === "woff" ? "font/woff" : "font/ttf";
    return `url('data:${mime};base64,${readFileSync(fontPath).toString("base64")}')`;
  });
}

console.log("Building…");
execSync("npm run build", {
  stdio: "inherit",
  cwd: root,
  env: { ...process.env, NODE_ENV: "production" },
});

let html = readFileSync(join(outDir, "index.html"), "utf-8");

// Remove preload hints
html = html.replace(/<link rel="preload"[^>]+>/g, "");

// Collect all CSS from the chunks directory and inject before </head>
const chunksDir = join(outDir, "_next/static/chunks");
const cssFiles = readdirSync(chunksDir).filter(f => f.endsWith(".css"));
if (cssFiles.length > 0) {
  const allCss = cssFiles.map(f => {
    const css = readFileSync(join(chunksDir, f), "utf-8");
    return inlineFonts(css);
  }).join("\n");
  html = html.replace("</head>", `<style>${allCss}</style></head>`);
}

// Inline scripts referenced via traditional <script src="...">
html = html.replace(/<script([^>]*?) src="([^"]+)"([^>]*)><\/script>/g, (match, before, src, after) => {
  const content = readOutFile(src);
  if (!content) return match;
  const attrs = (before + " " + after).replace(/\s+/g, " ").trim().replace(/ src="[^"]*"/, "");
  return `<script ${attrs}>${content.toString("utf-8")}</script>`;
});

const outFile = join(root, "pdg.html");
writeFileSync(outFile, html);
const size = (html.length / 1024 / 1024).toFixed(1);
console.log(`\n✓ Created pdg.html (${size} MB)`);
console.log("  Upload this file to Pastry to publish.");
