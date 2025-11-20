import {expect,test} from "@playwright/test"

test('Input',async ({page})=>{
    await page.goto('https://soften-front.vercel.app/Login');

    await page.locator('#username').fill('testuser');
    await expect(page.locator('#username')).toHaveValue('testuser');
    await page.locator('#password').fill('Test@1234');
    await expect(page.locator('#password')).toHaveValue('Test@1234');   

})

test('No password',async ({page})=>{
    await page.goto('https://soften-front.vercel.app/Login');

    await page.locator('#username').fill('testuser');

    await page.click('button:has-text("Login")');

    await expect(page).toHaveURL("https://soften-front.vercel.app/Login");

})

test('No username',async ({page})=>{
    await page.goto('https://soften-front.vercel.app/Login');

    await page.locator('#password').fill('Test@1234');

    await page.click('button:has-text("Login")');

    await expect(page).toHaveURL("https://soften-front.vercel.app/Login");

})

test('wrong username',async ({page})=>{
    await page.goto('https://soften-front.vercel.app/Login');

    await page.locator('#username').fill('');
    await page.locator('#password').fill('');

    await page.click('button:has-text("Login")');

    await expect(page.locator('text=Failed to login')).toBeVisible();

})

test('wrong password',async ({page})=>{
    await page.goto('https://soften-front.vercel.app/Login');

    await page.locator('#username').fill('');
    await page.locator('#password').fill('');

    await page.click('button:has-text("Login")');

    await expect(page.locator('text=Failed to login')).toBeVisible();

})

test('login success',async ({page})=>{
    await page.goto('https://soften-front.vercel.app/Login');

    await page.locator('#username').fill('');
    await page.locator('#password').fill('');

    await page.click('button:has-text("Login")');

    await expect(page).toHaveURL('https://soften-front.vercel.app/Menu');

})