import { AppPage } from './app.po';
import { browser, by } from 'protractor';
import { testScreenshot } from './screenshot-util';

describe('expansion panel demo', () => {
  let page: AppPage;

  beforeAll(async () => {
    page = new AppPage();
    await page.navigateToExpansionPanelDemo();
  });

  it('expansion panel looks correct before', async () => {
    await testScreenshot('e2e/goldens/expansionPanelDemo0.png');
  });

  it('expansion panel looks correct after', async () => {
    const expansionPanel = browser.element(by.css('mat-expansion-panel:nth-child(2)'));
    await browser.wait(expansionPanel.isPresent());
    await expansionPanel.click();
    await browser.sleep(500);
    await testScreenshot('e2e/goldens/expansionPanelDemo1.png');
  });

});
