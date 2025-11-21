import { expect, test } from "@playwright/test";

test('Login -> Main', async ({ page }) => {
    await page.goto('https://soften-front.vercel.app/Login');

    await page.locator('img[alt="Abstract Object"]').click();
    await expect(page).toHaveURL('https://soften-front.vercel.app/Menu');

});

test('Login -> register', async ({ page }) => {
    await page.goto('https://soften-front.vercel.app/Login');

    await page.getByRole('link', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL('https://soften-front.vercel.app/Register');

});

test('Login -> about', async ({ page }) => {
    await page.goto('https://soften-front.vercel.app/Login');

    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('https://soften-front.vercel.app/about');

});

