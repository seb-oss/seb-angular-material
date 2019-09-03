import { AppPage } from './app.po';
import { browser, by } from 'protractor';
import { testScreenshot } from './screenshot-util';

describe('inputs demo', () => {
  let page: AppPage;

  beforeAll(async () => {
    page = new AppPage();
    await page.navigateToInputsDemo();

  });

  beforeEach(async () => {
    const bothButton = browser.element(by.css('.mat-form-field-type-mat-select.mat-form-field-appearance-outline'));
    await bothButton.isPresent();
    await bothButton.click();
  });

  it('looks correct', async () => {
    await testScreenshot('e2e/goldens/InputDemo0.png');
  });

});
