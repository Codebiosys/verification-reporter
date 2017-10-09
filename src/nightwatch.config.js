require('babel-register');
require('babel-polyfill');

const {
  SITE_BASE_URL,
  SELENIUM_SERVICE,
  SELENIUM_PORT,
  SILENT,
  STEP_DIR,
  REPORT_OUTPUT_DIR,
  SCREEN_OUTPUT_DIR,
  CUSTOM_STEP_DIR,
  PAGES_DIR,
  FEATURE_DIR
} = require('./constants');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--compiler', 'js:babel-register',
    '--require', STEP_DIR,
    '--require', CUSTOM_STEP_DIR,
    '--format', `json:${REPORT_OUTPUT_DIR}/cucumber.json`,
    FEATURE_DIR],
  nightwatchOutput: false,
});

module.exports = (function nwconfig() {
  return {
    src_folders: [],
    page_objects_path: PAGES_DIR,
    selenium: {
      start_process: false,
    },
    test_settings: {
      default: {
        launch_url: SITE_BASE_URL,
        selenium_port: SELENIUM_PORT,
        selenium_host: SELENIUM_SERVICE,
        silent: SILENT,
        screenshots: {
          enabled: true,
          on_failure: true,
          on_error: true,
          path: SCREEN_OUTPUT_DIR,
        },
        desiredCapabilities: {
          browserName: 'chrome',
          javascriptEnabled: true,
        },
      },
    },
  };
}());
