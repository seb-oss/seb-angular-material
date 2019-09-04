import { AppPage } from './app.po';
import { browser, by } from 'protractor';
import { testScreenshot } from './screenshot-util';

describe('toggle buttons demo', () => {
  let page: AppPage;

  beforeAll(async () => {
    page = new AppPage();
    await page.navigateToToggleButtonsDemo();
  });

  it('toggle button looks correct before', async () => {
    await testScreenshot('e2e/goldens/toggleButtonsDemo0.png');
  });

  it('toggle button looks correct after', async () => {
    const bothButton = browser.element(by.css('.mat-slide-toggle-bar'));
    await browser.wait(bothButton.isPresent());
    await bothButton.click();
    await browser.sleep(500);
    await testScreenshot('e2e/goldens/toggleButtonsDemo1.png');
  });

});
