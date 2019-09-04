import { AppPage } from './app.po';
import { browser, by } from 'protractor';
import { testScreenshot } from './screenshot-util';

describe('overlay demo', () => {
  let page: AppPage;

  beforeAll(async () => {
    page = new AppPage();
    await page.navigateToOverlayDemo();
  });

  it('looks correct for SnackBar', async () => {
    const button = browser.element(by.css('button[aria-label="buttonForSnackBar"]'));
    await browser.wait(button.isPresent());
    await button.click();
    await browser.sleep(500);
    await testScreenshot('e2e/goldens/overlayDemoForSnackBar.png');
  });

  it('looks correct for BottomSheet', async () => {
    const button = browser.element(by.css('button[aria-label="buttonForBottomSheet"]'));
    await browser.wait(button.isPresent());
    await button.click();
    await browser.sleep(500);
    await testScreenshot('e2e/goldens/overlayDemoForBottomSheet.png');
  });

});
