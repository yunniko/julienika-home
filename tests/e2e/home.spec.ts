import { expect, test } from "@playwright/test";

test("homepage lists all three live tools", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: /Fraction Calculator/ })).toHaveAttribute(
    "href",
    "https://fractions.svc.julienika.cz"
  );
  await expect(page.getByRole("link", { name: /Yarn & Gauge Tools/ })).toHaveAttribute(
    "href",
    "https://yarn.svc.julienika.cz"
  );
  await expect(page.getByRole("link", { name: /Sourdough Calculators/ })).toHaveAttribute(
    "href",
    "https://sourdough.svc.julienika.cz"
  );
});

test("ads.txt is served", async ({ page }) => {
  const response = await page.goto("/ads.txt");
  expect(response?.status()).toBe(200);
  const body = await response?.text();
  expect(body).toContain("pub-4841997453857387");
});
