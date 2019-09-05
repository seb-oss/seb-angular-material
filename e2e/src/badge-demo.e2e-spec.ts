import { AppPage } from './app.po';
import { testScreenshot } from './screenshot-util';

describe('badge demo', () => {
  let page: AppPage;

  beforeAll(async () => {
    page = new AppPage();
    await page.navigateToBadgeDemo();
  });

  it('badge looks correct', async () => {
    await testScreenshot('e2e/goldens/badgeDemo0.png');
  });

});
