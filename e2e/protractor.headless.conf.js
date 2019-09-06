
let config = require('./protractor.conf.js').config;

// If UPDATE_GOLDENS is "1" or "true", blue-harvest will update the reference
// screenshots instead of comparing against them.

config.capabilities.chromeOptions = {
  args: [
    "--headless",
    '--disable-gpu',
    '--font-render-hinting=none',
    '--disable-canvas-aa',
    '--disable-2d-canvas-clip-aa',
    '--disable-gl-drawing-for-tests',
    '--window.devicePixelRatio=1.25',
    '--hide-scrollbars',
  ]
};

exports.config = config;
