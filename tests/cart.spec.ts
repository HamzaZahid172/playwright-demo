import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('add first product to cart', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(process.env.SAUCE_USER!, process.env.SAUCE_PASS!);

  const firstAddBtn = page.getByRole('button', { name: /Add to cart/i }).first();
  await firstAddBtn.click();

  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');
});
