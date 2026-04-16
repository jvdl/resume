import { defineConfig, devices } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

export default defineConfig({
  testDir: "./build",
  outputDir: "./test-results",
  reporter: "list",
  maxFailures: 0,
  use: {
    ...devices["Desktop Chrome"],
    baseURL: BASE_URL,
  },

  projects: [
    {
      name: "generate-pdf",
      testMatch: `build/export-to-pdf.ts`,
    },
  ],

  webServer: {
    command: "npm run preview",
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
  },
});
