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

  navigateToExpansionPanelDemo() {
    return browser.get('/#/expansionPanel');
  }

  navigateToInputsDemo() {
    return browser.get('/#/inputs');
  }

  navigateToOverlayDemo() {
    return browser.get('/#/overlay');
  }

  getTitle() {
    return element(by.css('app-root h1'));
  }
}
