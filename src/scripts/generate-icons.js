import fs from "fs";
import process from "node:process";
import path from "path";

// Load config (svg.config.json)
const configPath = path.resolve("./svg.config.json");
if (!fs.existsSync(configPath)) {
  console.error("❌ svg.config.json not found. Aborting icon generation.");
  process.exit(1);
}
const cfg = JSON.parse(fs.readFileSync(configPath, "utf-8"));

const svgDir = path.resolve(cfg.sourceDir);
const outDir = path.resolve(cfg.outputDir);

if (!fs.existsSync(svgDir)) {
  console.error(`❌ Source directory not found: ${svgDir}`);
  process.exit(1);
}

// Clean output directory
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

const files = fs
  .readdirSync(svgDir)
  .filter((f) => f.toLowerCase().endsWith(".svg"));

if (!files.length) {
  console.warn("⚠️ No SVG files found to generate icons.");
}

// Convert filename to PascalCase
const toPascalCase = (str) =>
  str
    .replace(/\.svg$/i, "")
    .replace(/[_\s-]+/g, "-")
    .replace(/(^\w|-(\w))/g, (m, p1, p2) => (p2 || p1).toUpperCase())
    .replace(/[^A-Za-z0-9]/g, "");

async function build() {
  console.log(`🔧 Generating ${files.length} icon component(s)...`);
  const exportNames = [];

  for (const file of files) {
    try {
      let svgCode = fs.readFileSync(path.join(svgDir, file), "utf-8");
      svgCode = svgCode.replace(/fill="#475569"/g, 'fill="currentColor"');

      const componentName = toPascalCase(file);
      const match = svgCode.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
      let inner = match ? match[1] : svgCode;

      // Convert SVG attribute names to React camelCase
      const attrMap = [
        ["clip-path", "clipPath"],
        ["fill-rule", "fillRule"],
        ["stroke-width", "strokeWidth"],
        ["stroke-linecap", "strokeLinecap"],
        ["stroke-linejoin", "strokeLinejoin"],
        ["stroke-miterlimit", "strokeMiterlimit"],
        ["stroke-dasharray", "strokeDasharray"],
        ["stroke-dashoffset", "strokeDashoffset"],
        ["color-interpolation-filters", "colorInterpolationFilters"],
      ];
      for (const [from, to] of attrMap) {
        inner = inner.replace(new RegExp(from + "=", "gi"), to + "=");
      }

      const code = `import * as React from 'react';
import { ${cfg.baseComponentImport.name} } from '${cfg.baseComponentImport.path}';

export const ${componentName} = (props: React.ComponentProps<typeof ${cfg.baseComponentImport.name}>) => (
  <${cfg.baseComponentImport.name} label='${componentName}' {...props}>
    ${inner}
  </${cfg.baseComponentImport.name}>
);
`;
      fs.writeFileSync(path.join(outDir, `${componentName}.tsx`), code);
      exportNames.push(componentName);
      console.log(`✅ ${componentName}.tsx generated`);
    } catch (e) {
      console.error(`❌ Failed to generate icon for ${file}:`, e.message);
    }
  }

  // 🧩 Create index.ts barrel export
  const indexPath = path.join(outDir, "index.ts");
  const indexContent =
    exportNames.map((name) => `export * from './${name}';`).join("\n") + "\n";
  fs.writeFileSync(indexPath, indexContent);

  console.log(`📦 index.ts created with ${exportNames.length} export(s).`);
  console.log(`✨ Icon build complete.`);
}

build().catch((e) => {
  console.error("Unhandled error during icon generation", e);
  process.exit(1);
});
