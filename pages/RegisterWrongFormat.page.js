import { Page } from '@playwright/test';

export class RegisterPage_WrongFormat {

    baseURL = 'https://soften-front.vercel.app/Register';

    locatorUsername = '#username';
    locatorEmail = '#email';
    locatorPassword = '#password';

    locatorRegisterButton = 'button:has-text("Register")';

    /**
     * 
     * @param {Page} page 
     */
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.baseURL)
    }

    async FillRegisterForm(username, email, password) {
        await this.page.locator(this.locatorUsername).fill(username);
        await this.page.locator(this.locatorEmail).fill(email);
        await this.page.locator(this.locatorPassword).fill(password);
    }


    async ClickRegisterButton() {
        await this.page.click(this.locatorRegisterButton);
    }

    async GetUsernameValue() {
        return await this.page.locator(this.locatorUsername).inputValue().toHaveValue(this.locatorUsername);
    }
    async GetEmailValue() {
        return await this.page.locator(this.locatorEmail).inputValue().toHaveValue(this.locatorEmail);
    }
    async GetPasswordValue() {
        return await this.page.locator(this.locatorPassword).inputValue().toHaveValue(this.locatorPassword);
    }
}



export default RegisterPage_WrongFormat;