import {expect,test} from "@playwright/test"

test.skip('Posting',async ({page})=>{
    await page.goto('https://soften-front.vercel.app/Menu');

    await page.getByRole('button', { name: 'Add' }).click();

    await page.getByPlaceholder('ex. Tom yum kung').fill('Pad Thai');

    await page.getByPlaceholder('Tell us about this recipe...').fill('This is a spicy Thai soup...');

    await page.getByPlaceholder('1.').fill('garlic');

    await page.getByRole('button', { name: 'Add Ingredient' }).click();

    await page.getByPlaceholder('2.').fill('shrimp');

    await page.getByRole('button', { name: 'Shrimp' }).click();

    await page.getByPlaceholder('Step 1').fill('Cut vegetables');

    await page.getByRole('button', { name: 'Share' }).click();


    
})

test('Input check',async ({page})=>{
    await page.goto('https://soften-front.vercel.app/Menu');

    await page.getByRole('link', { name: 'Login' }).click();

    await page.locator('#username').fill('tester');

    await page.locator('#password').fill('123456');

    await page.click('button:has-text("Login")');

    await page.locator('button.fixed.bottom-8.right-8').click();

    await page.getByPlaceholder('ex. Tom yum kung').fill('Pad Thai');
    await expect(page.getByPlaceholder('ex. Tom yum kung')).toHaveValue('Pad Thai');

    await page.getByPlaceholder('Tell us about this recipe...').fill('This is a spicy Thai soup...');
    await expect(page.getByPlaceholder('Tell us about this recipe...')).toHaveValue('This is a spicy Thai soup...');

    await page.getByPlaceholder('1.').fill('garlic');
    await expect(page.getByPlaceholder('1.')).toHaveValue('garlic');

    await page.getByRole('button', { name: 'Add Ingredient' }).click();

    await page.getByPlaceholder('2.').fill('shrimp');
    await expect(page.getByPlaceholder('2.')).toHaveValue('shrimp');

    await page.getByPlaceholder('Step 1').fill('Cut vegetables');
    await expect(page.getByPlaceholder('Step 1')).toHaveValue('Cut vegetables');
})