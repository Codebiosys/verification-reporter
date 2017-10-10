const reporter = require('cucumber-html-reporter');

const {
  REPORT_THEME,
  REPORT_OUTPUT_DIR,
  APP_VERSION,
  TEST_ENVIRONMENT,
  BROWSER,
  PLATFORM,
} = require('./constants');

const options = {
  theme: REPORT_THEME,
  jsonDir: REPORT_OUTPUT_DIR,
  output: `${REPORT_OUTPUT_DIR}/report.html`,
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': APP_VERSION,
    'Test Environment': TEST_ENVIRONMENT,
    Browser: BROWSER,
    Platform: PLATFORM,
    Parallel: 'Scenarios',
    Executed: 'Remote',
  },
};

reporter.generate(options);
