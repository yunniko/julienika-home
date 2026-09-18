import path from "node:path";
import { defineConfig } from "vitest/config";

// Unit tests only. Without an explicit include, vitest also picks up the
// Playwright specs in tests/e2e and fails with "Playwright Test did not expect
// test() to be called here" — e2e runs via `npm run test:e2e` instead.
//
// The `@/*` alias mirrors tsconfig.json's paths, which vitest does not read.
export default defineConfig({
  resolve: {
    alias: { "@": path.resolve(import.meta.dirname) },
  },
  test: {
    include: ["tests/unit/**/*.spec.ts"],
  },
});
