
let config = require('./protractor.conf.js').config;

// If UPDATE_GOLDENS is "1" or "true", blue-harvest will update the reference
// screenshots instead of comparing against them.

config.capabilities.chromeOptions = {
  args: [
    "--headless",
    'window-size=1366,1600',
    '--disable-gpu',
    '--font-render-hinting=medium',
    '--disable-canvas-aa'
  ]
};

exports.config = config;
