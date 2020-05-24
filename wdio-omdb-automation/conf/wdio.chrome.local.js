const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
    './tests/specs/first.js',
];

config.port= 9515;
config.services = ['chromedriver'];
config.baseUrl = 'http://localhost:3007'

//services: ['chromedriver','geckodriver'],
// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        browserName: 'chrome'
    },
];

exports.config = config;
