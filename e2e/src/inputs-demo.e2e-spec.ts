import { AppPage } from './app.po';
import { browser, by } from 'protractor';
import { testScreenshot } from './screenshot-util';

describe('inputs demo', () => {
  let page: AppPage;

  beforeAll(async () => {
    page = new AppPage();
    await page.navigateToInputsDemo();
  });

  it('inputs looks correct before', async () => {
    await testScreenshot('e2e/goldens/inputDemo0.png');
  });

  it('inputs looks correct after', async () => {
    const selectInput = browser.element(by.css('.mat-form-field-type-mat-select.mat-form-field-appearance-outline'));
    await browser.wait(selectInput.isPresent());
    await selectInput.click();
    await browser.sleep(500);
    await testScreenshot('e2e/goldens/inputDemo1.png');
  });

});
