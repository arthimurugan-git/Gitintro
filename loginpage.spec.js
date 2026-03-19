import { test,expect} from '@playwright/test'
import { assert, count, log } from 'node:console';
import { waitForDebugger } from 'node:inspector';
import { title } from 'node:process';
import { text } from 'node:stream/consumers';
// test('First test case broswerlanch', async({page})=>{
//     await page.goto('')
// const title = await page.title();
// console.log('Tittle of the page is'+ title);

// // })
// test('test1 is swaglabs',async({page})=>{
    // await page.goto('https://www.saucedemo.com/');
//     const title= await page.title();
//     console.log('title is'+title);

//     await page.locator("//input[@id='user-name']").fill('standard_user')
    
//     await page.locator("//input[@id='password']").fill('secret_sauce')
//     await page.locator("//input[@id='login-button']").click()
    
// })
// Task:

// Enter Username
// Enter Password
// Click Login

// Verify Dashboard visible

// test('test2', async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     const title= await page.title()
//     console.log('title is'+title);
//     await page.locator("//input[@name='username']").fill('Admin')
//     await page.locator("//input[@name='password']").fill('admin123')
//     await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click();
// //     await page.waitForTimeout(3000);

    
// // })
// // Click Login link
// // Enter Email
// // Enter Password
// // Click Login

// // test('test3', async({page})=>{
// //     await page.goto("https://demowebshop.tricentis.com/login")
// //     const title = await page.title();
// //     console.log('title is'+ title);
// //     await page.locator("//a[@class='ico-login']").click();
// //     await page.locator("//input[@id='Email']").fill("athi@gmail.com");
// //     await page.locator("//input[@id='Password']").fill("arthi");
// //     await page.locator("//input[@value='Log in']").click();
// //     await page.waitForEvent('locator');

// // })
// // Task:
// // Enter Username
// // Enter Password
// // Click Submit

// // Validate success message

// // test('testpro', async({page})=>{
// //     await page.goto("https://practicetestautomation.com/practice-test-login/")
// //     const title = await page.title();
// //     console.log('title is'+ title);
// //     await page.locator("//input[@name='username']").fill("student");
// //     await page.locator("//input[@name='password']").fill("Password123");
// //     await page.locator("//input[@id='submit']").click();
// //     await page.waitForEvent('locator');

// // }
// // )
// // test ('testsample', async({page})=>{
// //     await page.goto('https://demo.nopcommerce.com/login')
// //     const title = await page.title();
// //     console.log('the tittle is'+title );
// //     await page.locator("//a[text()='Computers']").click();
// //     await page.waitForTimeout(3000)
    
// //css selectot with or without tagname

// // test('sample1', async({page})=>{
// // await page.goto("https://demowebshop.tricentis.com/login")
// // const title = await page.title();
// // console.log("The Title is "+ title);
// // await page.locator(".ico-login").click();
// // await page.waitForTimeout(3000)
// //})
// // test("sample", async({page})=>{
// //     await page.goto('https://www.saucedemo.com/');
// //     const title = await page.title()
// //     console.log("the tittle is "+ title);
    
//     // // const text = await page.locator(".listbox").textContent();
//     // // console.log("the Text is "+ text);
//     // const text = await page.$$("//div[@class='header-menu']//ul//li//a");
//     // for (let txt of text) {
//     //     const textvalues = await txt.textContent();
//     //     console.log('the element txt is '+ textvalues);
//     // // }
//     // const text = await page.locator("//div[@class='header-menu']//ul//li//a").textContent();
//     // console.log("the first element is "+ text);
//     // // //prebuild in actions
//     // await page.locator("#user-name").fill("standard_user");
//     // await page.locator("#password").fill("secret_sauce");
//     // await page.locator("#login-button").click();
//     // // // let items = await page.locator(".inventory_item_name ");
//     // console.log("the total item is "+ await items.count());
//     //chaining not working
//     // await page.locator(".inventory_item_name ").first().locator("#add-to-cart-sauce-labs-backpack").click();

//     // await page.getByText('Register').click();
//     // await page.getByPlaceholder('Password').fill('arthi')
//     // await page.getByAltText('Sauce Labs Backpack').click();
//     // await page.getByLabel("username").fill('adrr');
//     // await page.fill('#user-name-','standard_user');
//     // await page.fill('#password','secret_sauce');
//     // await page.locator('#login-button').click();
//     // await page.locator('.inventory_item_name ').filter({hasText:'Sauce Labs Bike Light'}).click();
//     // await page.getByText("Apparel").hover();
//     // await page.waitForTimeout(3000)
//     // await page.getByPlaceholder('Search Amazon.in').fill('laptop');
//     // await page.locator('#nav-search-submit-button').click();
//     // let items = await page.locator(".inventory_item_name ");
//     // await items.nth(1);
//     // await page.locator('#add-to-cart-sauce-labs-fleece-jacket').click();
//     // await page.locator("//a[@class='shopping_cart_link']").click();

//     // test('sample',async({page})=>{
//     //     await page.goto('https://www.saucedemo.com/');
//     //     const title = await page.title();
//     //     console.log('the title of page is '+ title);
//     //     await page.locator("#user-name").fill("standard_user");
//     //     await page.locator("#password").fill("secret_sauce");
//     //     await page.locator("#login-button").click();
//     //     let items = await page.locator('.inventory_item_name');
//     //     console.log("the item count is "+ await items.count());
//     //     await items.first().getByRole('button',{name:''})
//     //     await page.waitForTimeout(3000)
//     // })
//     //drag and drop
//     // test('dragdrop', async({page})=>{
//     //   await page.goto("https://testautomationpractice.blogspot.com/");
//     //   const title = await page.title();
//     //   console.log("the title is "+title);
//     //   const source = await page.locator("[id='draggable']");
//     //   const target = await page.locator("[id='droppable']");
//     //   await source.dragTo(target);
//     //   await page.waitForTimeout(5000);
//     // })
//     test('samples', async({page})=>{}
//         await page.goto("https://demoqa.com/automation-practice-form");
//         // await page.getByText('Copy Text').dblclick();
//         // await page.waitForTimeout(3000)
//         //to handle buttons
//         //radio button
//         const title = await page.title();
//         console.log("the title is "+ title);
//         await page.locator("[id='male']").check();
//         //to verify 
//         const ismalechecked = await page.locator("[id='male']").isChecked();
//         console.log("is clicked " + ismalechecked);
//         //check box
//         await page.locator("#sunday").check();
//         await page.locator("#saturday").check();
//         const check1 = await page.locator("#sunday").isChecked();
//         console.log("is checked "+check1);
//         const check2 = await page.locator("#saturday").isChecked();
//         console.log(("is checked "+check2));
//         await expect (page.locator("#sunday")).toBeTruthy
//         dropdown handling
//         const countrydropdown = await page.locator("#country");
//         await countrydropdown.selectOption({label:'Canada'});
//         const selectedcontry = await countrydropdown.inputValue();
//         console.log("the selected country is "+selectedcontry);
//         //multiple selction
//         const colorselect = await page.locator("#colors");
//         const selected=await colorselect.selectOption(['Red','Green']);
//         console.log("the selected are "+ selected);
//         selected drop down input value
//         const allcountry= await page.locator("#country option").allTextContents();
//         console.log("the total no of country is "+allcountry);
//         for (let i = 0; i <allcountry; i++) {
//             const countryname = await page.locator("#country option").nth(i).textContent();
//             console.log("country name is "+ allcountry);
//         dinamic drop down
//         await page.locator('#state').getByText("Uttar Pradesh").click();
        
//         //task 1
// //    test('task1', async({page})=>{
// //     await page.goto("https://demoqa.com/select-menu");
// //     const title = await page.title();
// //     console.log("the title is "+ title);
// //     await page.getByText("Select Menu").first().click();
// //     const stylemenu = await page.locator("#oldSelectMenu");
// //     const oldstyle = await stylemenu.selectOption({label:'Red'});
// //     console.log("the style is "+oldstyle);
    
// //     await page.waitForTimeout(4000);
// //    })
// test('task7',async({page})=>{
//     await page.goto("https://letcode.in/dropdowns");
//     const fruits = await page.locator("#fruits option").count();
//     console.log("the total no of fruits is "+fruits);
//     const fruitsnames = await page.locator("#fruits option").inputValue();
//     for (let i = 0; i <count; i++){
//         const fruitsname = await page.locator("#fruits option").nth(i).textContent();
//         console.log("the fruits are "+fruitsname);
//     }
//     await page.waitForTimeout(3000)

// })
// // test('task1', async({page})=>{
// //     await page.goto("https://demoqa.com/select-menu");
// //     const title = await page.title();
// //     console.log("the title is "+ title);
// //     const stylemenu = await page.locator("#oldSelectMenu");
// //     const oldstyle = await stylemenu.selectOption({label:'Red'});
// //     console.log("the style is "+oldstyle);
// //     await page.waitForTimeout(4000);
// // })
// //frame locators
// // test ( 'sample ', async({page})=>{
// //     await page.goto('https://netbanking.hdfcbank.com/netbanking/');
// //     // await page.frame({name:'login_page'}).locatoru("//input[@name='fldLoginUserId']").fill("Arthiii");
// //     // await page.frame({url:'https://netbanking.hdfcbank.com/netbanking/RSNBLogin.html?v=23'}).locator("//input[@name='fldLoginUserId']").fill("viyas");
// //     // await page.frameLocator("//frame[@scrolling='yes']").locator("//input[@name='fldLoginUserId']").fill("arthi");
// //     const frames = page.frames();
// //     console.log("the total frame is ",frames.length);
    
// //     await page.waitForTimeout(3000);
// // })
// // test.only('sample2', async({page})=>{
// //     await page.goto("https://the-internet.herokuapp.com/nested_frames");
// //     await page.frameLocator("//frame[@name='frame-top']").
// //     await page.waitForTimeout(3000)

// // })
// // test('DatePicker', async({page})=>{
// //     await page.goto('https://demo.automationtesting.in/Datepicker.html');
// //     const year = '2023'
// //     const day = '27';
// //     // await page.locator("//li[@class='resp-tab-item resp-tab-active']").click();
// //     await page.locator("#datepicker2").first().click();
// //     while(true){
// //         const currentyear = await page.locator(".ui-datepicker-title").textContent();
// //         if (currentyearmonth==year) {
// //             break;
            
// //         }
// //         if (currentyearmonth>year) {
// //             await page.locator("//a[@title='Prev']").click();
// //         }
// //     }
// //     await page.waitForTimeout(3000)
// // }
// // )

// // test('windows handlings', async({page,context})=>{
// //    await page.goto("https://www.flipkart.com/");
// //    const title = await page.title();
// //    console.log("the home page title is "+title);
// //    await page.locator("//input[@name='q']").first().fill('Iphone');
// //    await page.keyboard.press('Enter');
// //    await page.waitForLoadState('load');
   
// //    const[newPage]=await Promise.all([
// //     context.waitForEvent("page"),
// //     page.locator("//div[text()='Apple iPhone 16 (Black, 128 GB)']").click(),
// //    ]);
// //    await page.waitForLoadState('load')
// //    const producttitle = await newPage.title();
// //    console.log("the product title is "+producttitle);
// //    await newPage.locator("//div[text()='Buy now']").click

// // //    const[secondPage]=await Promise.all([
// // //     context.waitForEvent("page"),
// // //     page.locator("//div[text()='Apple iPhone 16 (Black, 128 GB)']").click(),
// // //    ]);


// //    await page.waitForTimeout(5000)
// // })
// // test('alters', async({page})=>{
// //     page.on('dialog',async(dialog)=>{
// //         console.log(dialog.message());
// //         await dialog.accept("arthiviyasprakash");
// //     })
// //     await page.goto("https://testautomationpractice.blogspot.com/");
// //     await page.locator("//button[@id='promptBtn']").click();
// //     await page.waitForTimeout(3000)
// // })
// //upload files
// // test('fileupload',async({page})=>{
// //     await page.goto("https://testautomationpractice.blogspot.com/");
// //     await page.locator("#singleFileInput").setInputFiles("C:/Users/ASUS/OneDrive/Documents/Arthi/Teams Pass.txt");
// //     await page.locator("//button[@type='submit']").first().click();
// //     await page.waitForTimeout(3000)
// // })
// //elememt ss

// // test.only('download',async({page})=>{
// //     await page.goto("https://testautomationpractice.blogspot.com/");
// //     // const filedownload= page.locator("//a[text()='selenium-snapshot.png']").click();
// //     // const download = await page.waitForEvent(filedownload);
// //     const elementss =page.locator("//input[@id='name']");
// //     await elementss.fill("arthi");
// //     await elementss.screenshot({path:'C:/Users/ASUS/OneDrive/Documents/Arthi/name.png'});
// //     // await page.waitForSelector();
// //     // await selectname.screemshot({path:'C:/Users/ASUS/OneDrive/Documents/Arthi/name.png'});

// //     // screenshot({path:'C:/Users/ASUS/OneDrive/Documents/Arthi/name.png'});
// //     console.log("done ss");

// //     await page.waitForTimeout(3000)
    
// // })

// //download the file
// // test('download',async({page})=>{
// //     await page.goto("https://the-internet.herokuapp.com/download");
// //     const downloadPromise = page.waitForEvent('download');
// //     await page.locator("//a[text()='sample3.pdf']").click();
// //     const download = await downloadPromise;

// //     //file path
// //     const filepath = 'C:/Users/ASUS/OneDrive/Documents/Arthi/sample3.pdf';
// //     await download.saveAs(filepath);
// //     console.log("the downloaded file path is "+filepath);
// //     await page.waitForTimeout(3000)
    

// // })

// //web table handlings

// test.only('static table',async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     const allRows = await page.locator("//table[@name='BookTable']//tbody//tr").count();
//     console.log("the total no of rows is "+allRows);
    
//     const allColums = await page.locator("//table[@name='BookTable']//tbody//tr//th").count();
//     console.log("the total no of columns are "+allColums);
//     for (let i = 0; i < allRows.count(); i++) {
//         count rowText = await allRows.nth(i).allTextContents();
//     }    
//  await page.waitForTimeout(5000)

// })
// test.only('WebTable Handling',async({page})=>{
//       await page.goto('https://testautomationpractice.blogspot.com/'); 

      
//       //static webtable Handling
//       const allRows=await page.locator("//table[@name='BookTable']//tbody//tr");
//       console.log('Total number of Rows in the Table :'+ await allRows.count());

//       const allColumns= await page.locator("//table[@name='BookTable']//tbody//tr//th").count();
//       console.log('Total number of Columns in the Table :'+ allColumns);

//       //for loop  to print all the values in the table 
//       //index based loop
//       for(let i=0;i<await allRows.count();i++){
//          const rowText=await allRows.nth(i).textContent();
//          console.log(rowText);
//       }
//       await page.waitForTimeout(3000);
// })
 test('WebTable Handling',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/'); 
    const allPages=await page.locator("//ul[@id='pagination']//li//a").count();
      console.log('Total number of Pages in the Table :'+allPages);

      for(let i=1;i<=allPages;i++){
           if(i>1){           
            await page.locator("//ul[@id='pagination']//li//a[text()='"+i+"']").click();
            await page.waitForLoadState('load');        
           }
           //locate the all the Rows
           await page.waitForSelector("//table[@id='productTable']//tbody//tr");

           const allRows=await page.locator("//table[@id='productTable']//tbody//tr").count();
           console.log('Total number of Rows in the Table on Page '+i+' is :'+allRows);

           for(let j=1;j<=allRows;j++){
            const rowText=await page.locator("//table[@id='productTable']//tbody//tr["+j+"]").textContent();
            console.log('Row '+j+' Text is :'+rowText);  
          
           }


      }

      
      await page.waitForTimeout(5000);


      
})