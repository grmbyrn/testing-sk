import { test, expect } from '@playwright/test';

test('homepage has Svelte title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Svelte/);
});
