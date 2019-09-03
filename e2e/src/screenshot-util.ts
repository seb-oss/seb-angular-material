import { browser } from 'protractor';

const blueharvest = require('blue-harvest');

export async function testScreenshot(path: string) {
  const pathToGolden = path;
  const screenshot = await browser.takeScreenshot();
  const result = await blueharvest.compareScreenshot(screenshot, pathToGolden, 'e2e/diff');
  expect(result).toBeTruthy();
}
