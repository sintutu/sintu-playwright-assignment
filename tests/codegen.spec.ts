// Annotated output from 
// npx playwright codegen https://ndosisimplifiedautomation.vercel.app --output test/codegen.spec.ts
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // 1. Login with admin user
  await page.goto('https://ndosisimplifiedautomation.vercel.app/');
  await page.getByRole('button', { name: '🔑 Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('sintutu@dev.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('@987654321');
  await page.getByRole('button', { name: 'Login' }).click();
  // 2. Navigate to admin panel
  await page.getByRole('button', { name: 'S Menu ▼' }).click();
  await page.getByRole('button', { name: '🔧 Admin Panel' }).click();
  // 3. Click invoices
  await page.getByRole('button', { name: '🧾 Invoices' }).click();
  await page.getByRole('button', { name: '➕ New Invoice' }).click();
  // 4. Create invoice to yourself, client name as, your name pty ldt
  await page.getByRole('textbox', { name: 'Type client name or email...' }).click();
  await page.getByRole('textbox', { name: 'Type client name or email...' }).fill('sintutu Pty Ltd');
  // I want to remove the below annoyance.
  // The textbox above makes some kind of filtering as I type.
  // This is what makes some kind of dropdown pop up.
  // I have to click away just to enter the address.
  /// I don't want to have to deal with that.
  await page.locator('form > div > div:nth-child(4)').click();
  // 5. Enter your fake address
  await page.getByRole('textbox', { name: 'Enter client address...' }).click();
  await page.getByRole('textbox', { name: 'Enter client address...' }).fill('1 Fake Address, 0000');
  // 6. Click add course (repeat 4 times)
  await page.getByRole('button', { name: '➕ Add Course' }).click();
  await page.getByRole('button', { name: '➕ Add Course' }).click();
  await page.getByRole('button', { name: '➕ Add Course' }).click();
  await page.getByRole('button', { name: '➕ Add Course' }).click();
  // 7. Select any 4 courses & 8. Enter any description
  // I'm annoyed here.
  // The element looks like a table where the first column is a dropdown for the course.
  // <table class="invoice-items-table" style="width: 100%; min-width: 860px; border-collapse: collapse;"><thead><tr style="background: rgb(248, 250, 252);"><th style="padding: 12px; text-align: left; border-bottom: 2px solid rgb(226, 232, 240);">Course <span style="font-weight: 400; color: rgb(148, 163, 184); font-size: 0.75rem;">(Optional)</span></th><th style="padding: 12px; text-align: left; border-bottom: 2px solid rgb(226, 232, 240);">Description</th><th style="padding: 12px; text-align: center; border-bottom: 2px solid rgb(226, 232, 240); width: 110px;">Students <span style="font-weight: 400; color: rgb(148, 163, 184); font-size: 0.75rem;">(Optional)</span></th><th style="padding: 12px; text-align: right; border-bottom: 2px solid rgb(226, 232, 240); width: 120px;">Rate</th><th style="padding: 12px; text-align: right; border-bottom: 2px solid rgb(226, 232, 240); width: 120px;">Total</th><th style="padding: 12px; text-align: center; border-bottom: 2px solid rgb(226, 232, 240); width: 60px;"></th></tr></thead><tbody><tr><td style="padding: 8px;"><select style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid rgb(226, 232, 240);"><option value="">Select course...</option><option value="c6f37b71-6c68-4e59-98ec-05aac8affbe3">Testing Course</option><option value="31b1143b-aa19-4c20-bdf6-6700484b0dcb">API Testing with Postman – Fundamentals</option></select></td><td style="padding: 8px;"><input placeholder="Description" type="text" value="" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid rgb(226, 232, 240);"></td><td style="padding: 8px;"><input min="1" placeholder="Optional" type="number" value="" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid rgb(226, 232, 240); text-align: center;"></td><td style="padding: 8px;"><input min="0" step="0.01" type="number" value="700" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid rgb(226, 232, 240); text-align: right;"></td><td style="padding: 8px; text-align: right; font-weight: 600;">R&nbsp;700,00</td><td style="padding: 8px; text-align: center;"><button type="button" style="background: rgb(254, 226, 226); color: rgb(220, 38, 38); border-width: medium; border-style: none; border-color: currentcolor; border-image: initial; border-radius: 6px; padding: 6px 10px; cursor: pointer;">🗑️</button></td></tr></tbody></table>
  // The second column is to enter the description.
  // What question 7 asks for is to pick from the dropdown only.
  // Then question 8 asks to fill the descriptions only.
  // I messed it up by doing 7 and 8 in the same recording.
  // I must separate it for my submission
  //
  // Selectors are inconsistent for picking course from dropdown
  // I also have something I don't like at all. 
  // At some point the course selection is found by
  //         page.getByRole('combobox').first().selectOption('guid-for-the-course-option');
  // then somehow it's 
  //         page.getByRole('cell', { name: 'Select course...' })
  //                .getByRole('combobox').selectOption('31b1143b-aa19-4c20-bdf6-6700484b0dcb');
  await page.getByRole('combobox').first().selectOption('31b1143b-aa19-4c20-bdf6-6700484b0dcb');
  await page.getByRole('combobox').nth(1).selectOption('31b1143b-aa19-4c20-bdf6-6700484b0dcb');
  await page.getByRole('combobox').nth(2).selectOption('31b1143b-aa19-4c20-bdf6-6700484b0dcb');
  await page.getByRole('cell', { name: 'Select course...' }).getByRole('combobox').selectOption('31b1143b-aa19-4c20-bdf6-6700484b0dcb');
  // Here is the misplaced attempt to fill in description
  // Somehow the flow knows this locator is sufficiently specified. I'm not convinced it's enough to find a textbox with the name "Decription".
  // The locator is not robust enough for my comfort. This is true for many of this assignment's locators. It's gross at this time.
  // I'm not convinced I need to double click the textbox to fill it
  // I don't like how the UI makes me remove the placeholder (if it even is a placeholder)
  // I need to hit End, Shift+Home to highlight the text then type over it with the desired description
  await page.getByRole('textbox', { name: 'Description' }).first().dblclick();
  await page.getByRole('textbox', { name: 'Description' }).first().press('End');
  await page.getByRole('textbox', { name: 'Description' }).first().press('Shift+Home');
  await page.getByRole('textbox', { name: 'Description' }).first().fill('Industry Specific Automation');
  await page.getByRole('textbox', { name: 'Description' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Description' }).nth(1).press('End');
  await page.getByRole('textbox', { name: 'Description' }).nth(1).press('Shift+Home');
  await page.getByRole('textbox', { name: 'Description' }).nth(1).fill('Limited Testing Resorces in Automation');
  // Here I'm fixing the typo
  await page.getByRole('textbox', { name: 'Description' }).nth(1).press('ArrowLeft');
  // Here I'm fixing the same typo where the locator's changed
  await page.getByRole('cell', { name: 'Limited Testing Resorces in' }).getByPlaceholder('Description').press('ArrowLeft');
  await page.getByRole('cell', { name: 'Limited Testing Resorces in' }).getByPlaceholder('Description').press('ArrowLeft');
  await page.getByRole('cell', { name: 'Limited Testing Resorces in' }).getByPlaceholder('Description').press('ArrowLeft');
  await page.getByRole('cell', { name: 'Limited Testing Resorces in' }).getByPlaceholder('Description').press('ArrowLeft');
  await page.getByRole('cell', { name: 'Limited Testing Resorces in' }).getByPlaceholder('Description').press('ArrowLeft');
  await page.getByRole('cell', { name: 'Limited Testing Resorces in' }).getByPlaceholder('Description').press('ArrowLeft');
  await page.getByRole('cell', { name: 'Limited Testing Resorces in' }).getByPlaceholder('Description').press('ArrowLeft');
  await page.getByRole('cell', { name: 'Limited Testing Resorces in' }).getByPlaceholder('Description').press('ArrowLeft');
  await page.getByRole('cell', { name: 'Limited Testing Resorces in' }).getByPlaceholder('Description').press('ArrowLeft');
  await page.getByRole('cell', { name: 'Limited Testing Resorces in' }).getByPlaceholder('Description').press('ArrowRight');
  await page.getByRole('cell', { name: 'Limited Testing Resorces in' }).getByPlaceholder('Description').press('ArrowRight');
  await page.getByRole('cell', { name: 'Limited Testing Resorces in' }).getByPlaceholder('Description').press('ArrowRight');
  await page.getByRole('cell', { name: 'Limited Testing Resorces in' }).getByPlaceholder('Description').fill('Limited Testing Resources in Automation');
  // Weirdly here, I'm still entering a description yet the locator is now a textbox, and somehow the nth
  // It makes no sense to me why the recipe would change on the same page. I suspect my inconsistent interactions on the page are implemented inconsistently. 
  // Still ugly.
  await page.getByRole('textbox', { name: 'Description' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Description' }).nth(2).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Description' }).nth(2).fill('Succession Planning in Automation');
  // I like this one the best. It specifies the name of the row. 
  // The name of the row is the course, which is what I pick from the comboboxes earlier. I just need a better way to get them than the guids. I see the option element "API Testing with Postman"
  // I think that's something worth doing.
  // WTF is ControlOrMeta? I don't really care. Probably an error that won't get into my test.
  await page.getByRole('row', { name: 'API Testing with Postman – Fundamentals API Testing with Postman – Fundamentals' }).getByPlaceholder('Description').click();
  await page.getByRole('row', { name: 'API Testing with Postman – Fundamentals API Testing with Postman – Fundamentals' }).getByPlaceholder('Description').press('ControlOrMeta+a');
  await page.getByRole('row', { name: 'API Testing with Postman – Fundamentals API Testing with Postman – Fundamentals' }).getByPlaceholder('Description').fill('Professional Communication');
  // 9. Validate R2800 as total
  // This is the location of R2800. I don't like this locator. It's obtuse. I can't find an elegant one right now.
  await page.getByText('R 2').nth(1).click();
  // 10. due date to be the last day of June
  await page.locator('input[type="date"]').fill('2026-06-30');
  // 11. select status as paid
  await page.getByRole('combobox').nth(4).selectOption('paid');
  // This creeps me out. I recall clicking Create Invoice before this dialog pops up. "It's an alert saying `Invoice created successfully!'"
  // On click of the button the alert pops up. I click okay. Then it renders the invoices list with my newly added invoice right there.
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  // 12. click create invoice
  await page.getByRole('button', { name: '✅ Create Invoice' }).click();
  // 13. validate your invoice is created
  // I click these three things because I know they hold values I'd want to assert on
  // There's an invoice number similar to INV-188649
  // The client name I entered before pops up again here.
  // The date I entered before pops up again here. 
  await page.getByRole('cell', { name: 'INV-' }).click();
  await page.getByText('sintutu Pty Ltd').click();
  await page.getByRole('cell', { name: '6/30/' }).click();
});