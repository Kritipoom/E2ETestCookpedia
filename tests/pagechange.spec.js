import { expect, test } from "@playwright/test";

test('landing -> login', async ({ page }) => {
    await page.goto('https://soften-front.vercel.app');

    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://soften-front.vercel.app/Login');

});

test('landing -> register', async ({ page }) => {
    await page.goto('https://soften-front.vercel.app');

    await page.getByRole('link', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL('https://soften-front.vercel.app/Register');

});

test('landing -> menu(discover now)', async ({ page }) => {
    await page.goto('https://soften-front.vercel.app');

    await page.getByRole('link', { name: 'Discovers Now' }).click();
    await expect(page).toHaveURL('https://soften-front.vercel.app/Menu');

});

test('landing -->menu(See Our Menu)', async ({ page }) => {
    await page.goto('https://soften-front.vercel.app');

    await page.getByRole('link', { name: 'See Our Menu' }).click();
    await expect(page).toHaveURL('https://soften-front.vercel.app/Menu');

});

test('landing -> menu(logo)', async ({ page }) => {
    await page.goto('https://soften-front.vercel.app');

    await page.locator('img[alt="Abstract Object"]').click();
    await expect(page).toHaveURL('https://soften-front.vercel.app/Menu');

});