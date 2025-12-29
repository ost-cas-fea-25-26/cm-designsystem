import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import preserveDirectives from "rollup-preserve-directives";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import type {} from "vitest/config";
import { configDefaults } from "vitest/config";
import pkg from "./package.json";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react(),
    // tailwindcss(), // Disabled: Let consuming apps process Tailwind
    svgr(),
    dts({
      entryRoot: path.join(dirname, "src"),
      tsconfigPath: path.resolve(__dirname, "tsconfig.build.json"),
      outDir: "dist",
      exclude: ["**/*.test.ts", "**/*.test.tsx", "**/setupTests.ts"],
    }),
    preserveDirectives(),
  ],
  publicDir: false,
  build: {
    lib: {
      entry: {
        index: path.resolve(dirname, "src/index.ts"),
        tokens: path.resolve(dirname, "src/tokens/index.ts"),
        "tailwind.preset": path.resolve(dirname, "src/tailwind.preset.ts"),
      },
      name: "CMDesignSystem",
      formats: ["es"],
    },
    rollupOptions: {
      // Exclude react and any other dependencies from the bundle
      external: [
        ...Object.keys(pkg.peerDependencies || {}),
        ...Object.keys(pkg.dependencies || {}),
        "react/jsx-runtime",
        "tailwindcss",
      ],
      output: {
        entryFileNames: "[name].js",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
    minify: false,
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
      {
        test: {
          environment: "jsdom",
          globals: true,
          setupFiles: "./src/setupTests.ts",
          exclude: [...configDefaults.exclude, "tests/*"],
        },
      },
    ],
  },
});
