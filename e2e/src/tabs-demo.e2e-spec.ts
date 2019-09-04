import { AppPage } from './app.po';
import { browser, by } from 'protractor';
import { testScreenshot } from './screenshot-util';

describe('tabs demo', () => {
  let page: AppPage;

  beforeAll(async () => {
    page = new AppPage();
    await page.navigateToTabsDemo();
  });

  beforeEach(async () => {
    const tab = browser.element(by.css('.mat-tab-label:nth-child(2)'));
    await browser.wait(tab.isPresent());
    await tab.click();
    await browser.sleep(500);
  });

  it('tabs looks correct', async () => {
    await testScreenshot('e2e/goldens/tabsDemo0.png');
  });

});
