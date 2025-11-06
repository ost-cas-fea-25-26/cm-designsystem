/* eslint-env node */
/* eslint-env node */
import fs from "fs";
import process from "node:process";
import path from "path";
import svgr from "@svgr/core";

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

// SVGR template wrapping with IconBase & AccessibleIcon optionally
const template = ({ componentName, jsx }, { accessible }) => {
  // Extract inner children: jsx is <svg ...>{children}</svg>
  const children = jsx.children;
  const accessibleImport = accessible
    ? 'import { AccessibleIcon } from "@radix-ui/react-accessible-icon";'
    : "";
  const wrapStart = accessible
    ? `<AccessibleIcon label="${componentName}">\n    <IconBase {...props}>`
    : `<IconBase {...props}>`;
  const wrapEnd = accessible
    ? "    </IconBase>\n  </AccessibleIcon>"
    : "</IconBase>";
  return `import * as React from "react";
${accessibleImport}
import { ${cfg.baseComponentImport.name} } from "${cfg.baseComponentImport.path}";

export interface ${componentName}Props extends React.ComponentProps<typeof ${cfg.baseComponentImport.name}> { label?: string }

export const ${componentName}: React.FC<${componentName}Props> = (props) => (
  ${wrapStart}
    ${children}
  ${wrapEnd}
);
`;
};

async function build() {
  console.log(`🔧 Generating ${files.length} icon component(s)...`);
  const exportNames = [];
  for (const file of files) {
    try {
      const svgCode = fs.readFileSync(path.join(svgDir, file), "utf-8");
      const componentName = toPascalCase(file);
      const code = await svgr.transform(
        svgCode,
        {
          icon: false,
          typescript: true,
          jsxRuntime: "automatic",
        },
        {
          componentName,
          template: (vars) => template(vars, { accessible: cfg.accessible }),
        }
      );
      fs.writeFileSync(path.join(outDir, `${componentName}.tsx`), code);
      exportNames.push(componentName);
      console.log(`✅ ${componentName}.tsx generated`);
    } catch (e) {
      console.error(`❌ Failed to generate icon for ${file}:`, e.message);
    }
  }

  // Create index.ts barrel export
  const indexContent =
    exportNames.map((name) => `export * from "./${name}";`).join("\n") + "\n";
  fs.writeFileSync(path.join(outDir, "index.ts"), indexContent);
  console.log(`📦 index.ts created with ${exportNames.length} export(s).`);
}

build().catch((e) => {
  console.error("Unhandled error during icon generation", e);
  process.exit(1);
});
