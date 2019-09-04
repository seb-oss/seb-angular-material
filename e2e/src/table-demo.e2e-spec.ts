import { AppPage } from './app.po';
import { browser, by } from 'protractor';
import { testScreenshot } from './screenshot-util';

describe('table demo', () => {
  let page: AppPage;

  beforeAll(async () => {
    page = new AppPage();
    await page.navigateToTableDemo();
  });

  it('table looks correct', async () => {
    await testScreenshot('e2e/goldens/tableDemo0.png');
  });

});
