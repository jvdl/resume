import { test as generate } from "@playwright/test";

// import { chromium } from "playwright";

generate("Generate PDF", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  // Export to PDF
  await page.pdf({
    path: "public/files/john-van-der-loo-resume.pdf",
    format: "A4",
    margin: {
      top: '100px',
      bottom: '70px',
      left: '50px',
      right: '50px'
    }
    });
});
