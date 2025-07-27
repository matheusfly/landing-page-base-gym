const { test, expect } = require('@playwright/test');

test('homepage has correct title', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/BASE/);
});
