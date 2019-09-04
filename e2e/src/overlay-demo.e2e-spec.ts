import { AppPage } from './app.po';
import { browser, by } from 'protractor';
import { testScreenshot } from './screenshot-util';

describe('buttons demo', () => {
  let page: AppPage;

  beforeAll(async () => {
    page = new AppPage();
    await page.navigateToOverlayDemo();
  });

  it('looks correct for SnackBar', async () => {
    const bothButton = browser.element(by.css('button[aria-label="buttonForSnackBar"]'));
    await browser.wait(bothButton.isPresent());
    await bothButton.click();
    await browser.sleep(500);
    await testScreenshot('e2e/goldens/overlayDemoForSnackBar.png');
  });

  it('looks correct for BottomSheet', async () => {
    const bothButton = browser.element(by.css('button[aria-label="buttonForBottomSheet"]'));
    await browser.wait(bothButton.isPresent());
    await bothButton.click();
    await browser.sleep(500);
    await testScreenshot('e2e/goldens/overlayDemoForBottomSheet.png');
  });

});
