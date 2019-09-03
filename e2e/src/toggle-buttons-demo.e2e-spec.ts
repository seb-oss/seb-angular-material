import { AppPage } from './app.po';
import { browser, by } from 'protractor';
import { testScreenshot } from './screenshot-util';

describe('toggle buttons demo', () => {
  let page: AppPage;

  beforeAll(async () => {
    page = new AppPage();
    await page.navigateToToggleButtonsDemo();

  });

  beforeEach(async () => {
    const bothButton = browser.element(by.css('.mat-slide-toggle-bar'));
    await bothButton.isPresent();
    await bothButton.click();
  });

  it('looks correct', async () => {
    await testScreenshot('e2e/goldens/toggleButtonsDemo0.png');
  });

});
