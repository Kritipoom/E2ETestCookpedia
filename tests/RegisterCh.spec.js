import { expect, test } from "@playwright/test";

test('Register -> Main', async ({ page }) => {
    await page.goto('https://soften-front.vercel.app/Register');

    await page.locator('img[alt="Abstract Object"]').click();
    await expect(page).toHaveURL('https://soften-front.vercel.app/Menu');

});

test('Register -> login', async ({ page }) => {
    await page.goto('https://soften-front.vercel.app/Register');

    await page.locator('a[href="/Login"]').first().click();
    await expect(page).toHaveURL('https://soften-front.vercel.app/Login');

});

test('Register -> about', async ({ page }) => {
    await page.goto('https://soften-front.vercel.app/Register');

    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('https://soften-front.vercel.app/about');

});

