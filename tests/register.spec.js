import { expect, test } from '@playwright/test';
import { RegisterPage_WrongFormat } from '../pages/RegisterWrongFormat.page.js';
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


// 5) Should fail if email in in wrong format
test('Should fail if email in in wrong format', async({ page }) => {
    const register_WrongEmailFormat = new RegisterPage_WrongFormat(page);
    var WrongEmailFormat = ['testuser15gmail.com', 'plainaddress', '@missingusername.com', 'username@.com', 'username@domain', 'username@domain..com'];

    // Without @ symbol
    await register_WrongEmailFormat.goto();
    await register_WrongEmailFormat.FillRegisterForm('testuser12', WrongEmailFormat[0], 'testuser15_password');
    await register_WrongEmailFormat.ClickRegisterButton();
    await expect(page).toHaveURL("https://soften-front.vercel.app/Register");

    // No @ and domain
    await register_WrongEmailFormat.goto();
    await register_WrongEmailFormat.FillRegisterForm('testuser12', WrongEmailFormat[1], 'testuser15_password');
    await register_WrongEmailFormat.ClickRegisterButton();
    await expect(page).toHaveURL("https://soften-front.vercel.app/Register");

    // without username in front of @
    await register_WrongEmailFormat.goto();
    await register_WrongEmailFormat.FillRegisterForm('testuser12', WrongEmailFormat[2], 'testuser15_password');
    await register_WrongEmailFormat.ClickRegisterButton();
    await expect(page).toHaveURL("https://soften-front.vercel.app/Register");

    //No naming domain's name 
    await register_WrongEmailFormat.goto();
    await register_WrongEmailFormat.FillRegisterForm('testuser12', WrongEmailFormat[3], 'testuser15_password');
    await register_WrongEmailFormat.ClickRegisterButton();
    await expect(page).toHaveURL("https://soften-front.vercel.app/Register");
    //Repeat dot after @
    await register_WrongEmailFormat.goto();
    await register_WrongEmailFormat.FillRegisterForm('testuser12', WrongEmailFormat[4], 'testuser15_password');
    await register_WrongEmailFormat.ClickRegisterButton();
    await expect(page).toHaveURL("https://soften-front.vercel.app/Register");

    await register_WrongEmailFormat.goto();
    await register_WrongEmailFormat.FillRegisterForm('testuser12', WrongEmailFormat[5], 'testuser15_password');
    await register_WrongEmailFormat.ClickRegisterButton();
    await expect(page).toHaveURL("https://soften-front.vercel.app/Register");
});

// 5.) Should fail if password was in wrong format
test('Should fail if password was in wrong format', async({ page }) => {
    const register_WrongEmailFormat = new RegisterPage_WrongFormat(page);

    var WrongPasswordFormat = ['short', 'password', '12345678', 'ALLCAPS123', 'pass word123', 'nocaps123'];

    // Without @ symbol
    await register_WrongEmailFormat.goto();
    await register_WrongEmailFormat.FillRegisterForm('testuser12', 'test12@gmail.com', WrongPasswordFormat[0]);
    await register_WrongEmailFormat.ClickRegisterButton();
    await expect(page).toHaveURL("https://soften-front.vercel.app/Register");

    // No @ and domain
    await register_WrongEmailFormat.goto();
    await register_WrongEmailFormat.FillRegisterForm('testuser12', 'test12@gmail.com', WrongPasswordFormat[1]);
    await register_WrongEmailFormat.ClickRegisterButton();
    await expect(page).toHaveURL("https://soften-front.vercel.app/Register");

    // without username in front of @
    await register_WrongEmailFormat.goto();
    await register_WrongEmailFormat.FillRegisterForm('testuser12', 'test12@gmail.com', WrongPasswordFormat[2]);
    await register_WrongEmailFormat.ClickRegisterButton();
    await expect(page).toHaveURL("https://soften-front.vercel.app/Register");

    //No naming domain's name 
    await register_WrongEmailFormat.goto();
    await register_WrongEmailFormat.FillRegisterForm('testuser12', 'test12@gmail.com', WrongPasswordFormat[3]);
    await register_WrongEmailFormat.ClickRegisterButton();
    await expect(page).toHaveURL("https://soften-front.vercel.app/Register");
    //Repeat dot after @
    await register_WrongEmailFormat.goto();
    await register_WrongEmailFormat.FillRegisterForm('testuser12', 'test12@gmail.com', WrongPasswordFormat[4]);
    await register_WrongEmailFormat.ClickRegisterButton();
    await expect(page).toHaveURL("https://soften-front.vercel.app/Register");

    await register_WrongEmailFormat.goto();
    await register_WrongEmailFormat.FillRegisterForm('testuser12', 'test12@gmail.com', WrongPasswordFormat[5]);
    await register_WrongEmailFormat.ClickRegisterButton();
    await expect(page).toHaveURL("https://soften-front.vercel.app/Register");
});

// 6) Should fail if duplicate Email (sequence test use only 1 browser to evaulate)
test('Should fail if duplicate Email', async({ page }) => {
    const register_DulicateEmail = new RegisterPage_WrongFormat(page);
    var Usernames = ['tester9', 'tester99'];
    var Dulicate_Email = 'Tester9@gmail.com';
    var passwords = ['Tester@9', 'Tester@99'];

    // 1st time use same email to register
    await register_DulicateEmail.goto();
    await register_DulicateEmail.FillRegisterForm(Usernames[0], Dulicate_Email, passwords[0]);
    await register_DulicateEmail.ClickRegisterButton();
    await expect(page).toHaveURL("https://soften-front.vercel.app/Login");

    // 2nd time use same email to register
    await register_DulicateEmail.goto();
    await register_DulicateEmail.FillRegisterForm(Usernames[1], Dulicate_Email, passwords[1]);
    await register_DulicateEmail.ClickRegisterButton();
    await expect(page).toHaveURL("https://soften-front.vercel.app/Register");

});

// 7.)Should success if all is correct
test('Should success if all is correct', async({ page }) => {
    const register_DulicateEmail = new RegisterPage_WrongFormat(page);
    var Usernames = 'Devtest';
    var Dulicate_Email = 'Devtest@gmail.com';
    var passwords = 'Devtest@Test';

    // register with correct info 
    await register_DulicateEmail.goto();
    await register_DulicateEmail.FillRegisterForm(Usernames, Dulicate_Email, passwords);
    await register_DulicateEmail.ClickRegisterButton();
    await expect(page).toHaveURL("https://soften-front.vercel.app/Login");
});