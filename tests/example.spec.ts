import { test, expect } from '@playwright/test';

test.only('1. Login with admin user', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: '🔑 Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('sintutu@dev.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('@987654321');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Welcomeback,sintutu👋Here\'s').click();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Ndosi Test Automation/);
});

test('get started link', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
