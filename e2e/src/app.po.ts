import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToRoot() {
    return browser.get('./');
  }

  navigateToButtonsDemo() {
    return browser.get('./#/buttons');
  }

  navigateToToggleButtonsDemo() {
    return browser.get('./#/buttonToggle');
  }

  navigateToExpansionPanelDemo() {
    return browser.get('./#/expansionPanel');
  }

  navigateToInputsDemo() {
    return browser.get('./#/inputs');
  }

  navigateToBadgeDemo() {
    return browser.get('./#/badge');
  }

  navigateToTableDemo() {
    return browser.get('./#/table');
  }

  navigateToTabsDemo() {
    return browser.get('./#/tabs');
  }

  navigateToOverlayDemo() {
    return browser.get('./#/overlay');
  }

  navigateToTooltipDemo() {
    return browser.get('./#/tooltip');
  }

  getTitle() {
    return element(by.css('app-root h1'));
  }
}
