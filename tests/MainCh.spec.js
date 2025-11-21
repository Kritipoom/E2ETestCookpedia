import { expect, test } from "@playwright/test";

test('Main -> login', async ({ page }) => {
    await page.goto('https://soften-front.vercel.app/Menu');

    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://soften-front.vercel.app/Login');

});

test('Main -> register', async ({ page }) => {
    await page.goto('https://soften-front.vercel.app/Menu');

    await page.getByRole('link', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL('https://soften-front.vercel.app/Register');

});

test('Main -> about', async ({ page }) => {
    await page.goto('https://soften-front.vercel.app/Menu');

    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('https://soften-front.vercel.app/about');

});

test('Main(login) -> profile', async ({ page }) => {
    await page.goto('https://soften-front.vercel.app/Menu');

    await page.getByRole('link', { name: 'Login' }).click();

    await page.locator('#username').fill('tester');

    await page.locator('#password').fill('123456');

    await page.click('button:has-text("Login")');

    await page.getByRole('link', { name: 'Profile' }).click();
    await expect(page).toHaveURL('https://soften-front.vercel.app/profile');

});
