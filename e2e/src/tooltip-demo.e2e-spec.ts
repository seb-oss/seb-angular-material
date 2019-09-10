import { AppPage } from './app.po';
import { browser, by } from 'protractor';
import { testScreenshot } from './screenshot-util';

describe('tooltip demo', () => {
  let page: AppPage;

  beforeAll(async () => {
    page = new AppPage();
    await page.navigateToTooltipDemo();
  });

  it('tooltip looks correct', async () => {
    const button = browser.element(by.css('button[aria-label="buttonForTooltip"]'));
    await browser.wait(button.isPresent());
    browser.actions().mouseMove(button).perform();
    await browser.sleep(500);

    await testScreenshot('e2e/goldens/tooltipDemo.png');
  });

});
