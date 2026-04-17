import { test as generate } from "@playwright/test";

generate("Generate PDF", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.pdf({
    path: "public/files/john-van-der-loo-resume.pdf",
    format: "A4",
    margin: {
      // ensure we add margins to avoid content butting up against the edges of the page
      top: "100px",
      bottom: "70px",
      left: "50px",
      right: "50px",
    },
  });
});
