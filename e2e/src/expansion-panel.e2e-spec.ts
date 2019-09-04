import { AppPage } from './app.po';
import { browser, by } from 'protractor';
import { testScreenshot } from './screenshot-util';

describe('expansion panel demo', () => {
  let page: AppPage;

  beforeAll(async () => {
    page = new AppPage();
    await page.navigateToExpansionPanelDemo();

  });

  beforeEach(async () => {
    const expansionPanel = browser.element(by.css('mat-expansion-panel:nth-child(2)'));
    await browser.wait(expansionPanel.isPresent());
    await expansionPanel.click();
    await browser.sleep(500);
  });

  it('looks correct', async () => {
    await testScreenshot('e2e/goldens/expansionPanelDemo0.png');
  });

});
