import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToRoot() {
    return browser.get('/');
  }
  navigateToButtonsDemo() {
    return browser.get('/#/buttons');
  }

  navigateToToggleButtonsDemo() {
    return browser.get('/#/buttonToggle');
  }

  getTitle() {
    return element(by.css('app-root h1'));
  }
}
