import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('SauceDemo login', () => {
  test('valid user can log in and see inventory', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(process.env.SAUCE_USER!, process.env.SAUCE_PASS!);
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products')).toBeVisible();
  });

  test('invalid password shows error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'wrong_password');
    await login.assertErrorContains('Username and password do not match');
  });
});
