import { expect, test } from '@playwright/test';

// 1) Input fields should display filled data
test('Input fields should display the data that was filled', async({ page }) => {
    await page.goto('https://soften-front.vercel.app/Register');

    await page.locator('#username').fill('testuser14');
    await expect(page.locator('#username')).toHaveValue('testuser14');

    await page.locator('#email').fill('testuser14@gmail.com');
    await expect(page.locator('#email')).toHaveValue('testuser14@gmail.com');

    await page.locator('#password').fill('testuser14_password');
    await expect(page.locator('#password')).toHaveValue('testuser14_password');
});


// 2) Should fail if no username
test('Should fail if no username', async({ page }) => {
    await page.goto('https://soften-front.vercel.app/Register');

    await page.locator('#email').fill('testuser14@gmail.com');
    await expect(page.locator('#email')).toHaveValue('testuser14@gmail.com');

    await page.locator('#password').fill('testuser14_password');
    await expect(page.locator('#password')).toHaveValue('testuser14_password');
    //click button register//
    await page.click('button:has-text("Register")');
    await expect(page).toHaveURL("https://soften-front.vercel.app/Register");
});


// 3) Should fail if no Email
test('Should fail if no Email', async({ page }) => {
    await page.goto('https://soften-front.vercel.app/Register');


    await page.locator('#username').fill('testuser14');
    await expect(page.locator('#username')).toHaveValue('testuser14');

    await page.locator('#password').fill('testuser14_password');
    await expect(page.locator('#password')).toHaveValue('testuser14_password');

    //click button register//
    await page.click('button:has-text("Register")');
    await expect(page).toHaveURL("https://soften-front.vercel.app/Register");
});


// 4) Should fail if no password
test('Should fail if no password', async({ page }) => {
    await page.goto('https://soften-front.vercel.app/Register');


    await page.locator('#username').fill('testuser14');
    await expect(page.locator('#username')).toHaveValue('testuser14');

    await page.locator('#email').fill('testuser14@gmail.com');
    await expect(page.locator('#email')).toHaveValue('testuser14@gmail.com');

    //click button register//
    await page.click('button:has-text("Register")');
    await expect(page).toHaveURL("https://soften-front.vercel.app/Register");
});