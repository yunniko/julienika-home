import { expect, test } from "@playwright/test";

test("homepage leads with content and links to the guides", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: "Guides", exact: true }).first()).toBeVisible();
  // Tool cards are still listed, below the content — five of them since D006.
  await expect(page.getByRole("link", { name: /Image Object Splitter/ })).toHaveAttribute(
    "href",
    "https://image-object-splitter.svc.julienika.cz"
  );
  await expect(page.locator('a[href*=".svc.julienika.cz"]')).toHaveCount(5);
});

test("guides index lists every guide and each one opens", async ({ page }) => {
  await page.goto("/guides");
  const links = page.locator('a[href^="/guides/"]');
  await expect(links).toHaveCount(6);

  await page.goto("/guides/bakers-percentage-and-hydration");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Baker's percentage");
  await expect(page.locator("article p")).not.toHaveCount(0);
});

test("about, contact and privacy pages render", async ({ page }) => {
  for (const [path, heading] of [
    ["/about", /About julienika/],
    ["/contact", /Contact/],
    ["/privacy", /Privacy Policy/],
  ] as const) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(heading);
  }
});

test("ads.txt is served", async ({ page }) => {
  const response = await page.goto("/ads.txt");
  expect(response?.status()).toBe(200);
  const body = await response?.text();
  expect(body).toContain("pub-4841997453857387");
});
