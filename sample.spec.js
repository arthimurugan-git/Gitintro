import { test,expect} from '@playwright/test';
import LoginPage from '../Pages/Loginpage';
import ProductPage from '../Pages/Products';

test('loginApplication', async({page})=>{
    const login = new LoginPage(page);
    const Products = new ProductPage(page);
    await page.goto("https://www.saucedemo.com/");
    await login.loginApplication("standard_user","secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page).toHaveTitle("Swag Labs");
    await Products.printProductNames();

})