import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', async () => {
    await page.navigateToRoot();
    await page.getTitle().isPresent();
    expect(await page.getTitle().getText()).toEqual('SEB Angular Material Theme');
  });
});
