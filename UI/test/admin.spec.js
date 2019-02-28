import puppeteer from "puppeteer";

const localUrlBase = "http://127.0.0.1:8080/UI"

const routes = {
    public: {
        landingPage: `${localUrlBase}/landing.html`,
        register: `${localUrlBase}/signup.html`,
        login: `${localUrlBase}/user_login.html`,
        adminLogin : `${localUrlBase}/admin_login.html`
    },
    user: {
        user_dashboard: `${localUrlBase}/user_dashboard.html`,
        questionPage: `${localUrlBase}/questions.html`
    },
    admin: {
        adminPage: `${localUrlBase}/orders_display_admin`
    }
};



const admin = {
    email: "super@admin.com",
    userpassword: "Admin@254"
}

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
});

describe("Admin Login", () => {
    test("successful login", async () =>{
        await page.goto(routes.public.login);
        await page.click('[data-testid="logInEmailInput"]');
        await page.type('[data-testid="logInEmailInput"]', user.email);
        await page.click('[data-testid="logInPasswordInput"]');
        await page.type('[data-testid="logInPasswordInput"]', user.userpassword);
        await page.click('[data-testid="registerSubmitButton"]');
    });
});