import { AppPage } from './app.po';
import { browser, by } from 'protractor';
import { testScreenshot } from './screenshot-util';

describe('buttons demo', () => {
  let page: AppPage;

  beforeAll(async () => {
    page = new AppPage();
    await page.navigateToButtonsDemo();

  });

  beforeEach(async () => {
    const bothButton = browser.element(by.css('mat-button-toggle[aria-label="linksAndButtons"] button'));
    await browser.wait(bothButton.isPresent());
    await bothButton.click();
    await browser.sleep(500);
  });

  it('looks correct', async () => {
    await testScreenshot('e2e/goldens/buttonsDemo0.png');
  });

});
