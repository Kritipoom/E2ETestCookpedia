import {expect,test} from "@playwright/test"

test('Log in test',async ({page})=>{
    await page.goto('https://soften-front.vercel.app/Login');

    await page.locator('#username').fill('testuser');
    await expect(page.locator('#username')).toHaveValue('testuser');
    await page.locator('#password').fill('Test@1234');
    await expect(page.locator('#password')).toHaveValue('Test@1234');
    
})