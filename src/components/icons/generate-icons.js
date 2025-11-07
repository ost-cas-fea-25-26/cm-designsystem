/* eslint-env node */
/* eslint-env node */
import fs from "fs";
import process from "node:process";
import path from "path";
// We attempted to use @svgr/core with a custom template, but due to template substitution issues
// we fallback to a lightweight manual wrapper approach that matches Calendar.tsx.
// (SVGR still imported if we want to revisit.)

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

// Convert filename to PascalCase (handling spaces & dashes)
const toPascalCase = (str) =>
  str
    .replace(/\.svg$/i, "")
    .replace(/[_\s-]+/g, "-")
    .replace(/(^\w|-(\w))/g, (m, p1, p2) => (p2 || p1).toUpperCase())
    .replace(/[^A-Za-z0-9]/g, "");

// (SVGR template no longer used; manual wrapping implemented below.)

async function build() {
  console.log(`🔧 Generating ${files.length} icon component(s)...`);
  const exportNames = [];
  for (const file of files) {
    try {
      let svgCode = fs.readFileSync(path.join(svgDir, file), "utf-8");
      // Normalize fills to currentColor
      svgCode = svgCode.replace(/fill="#475569"/g, 'fill="currentColor"');
      const componentName = toPascalCase(file);
      // Extract inner contents of <svg> to place inside IconBase
      const match = svgCode.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
      let inner = match ? match[1] : svgCode;
      // Common SVG attribute camelCase conversions for React
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
      const code = `import * as React from 'react';\nimport { ${cfg.baseComponentImport.name} } from '${cfg.baseComponentImport.path}';\n\nexport const ${componentName} = (props: React.ComponentProps<typeof ${cfg.baseComponentImport.name}>) => (\n  <${cfg.baseComponentImport.name} label='${componentName}' {...props}>\n    ${inner}\n  </${cfg.baseComponentImport.name}>\n);\n`;
      fs.writeFileSync(path.join(outDir, `${componentName}.tsx`), code);
      exportNames.push(componentName);
      console.log(`✅ ${componentName}.tsx generated`);
    } catch (e) {
      console.error(`❌ Failed to generate icon for ${file}:`, e.message);
    }
  }

  // Create index.ts barrel export
  const indexContent =
    exportNames.map((name) => `export * from './${name}';`).join("\n") + "\n";
  fs.writeFileSync(path.join(outDir, "index.ts"), indexContent);
  console.log(`📦 index.ts created with ${exportNames.length} export(s).`);
}

build().catch((e) => {
  console.error("Unhandled error during icon generation", e);
  process.exit(1);
});
