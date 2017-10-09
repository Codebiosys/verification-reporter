const reporter = require('cucumber-html-reporter');

const {
  REPORT_THEME,
  REPORT_OUTPUT_DIR
} = require('./constants');

const options = {
  theme: REPORT_THEME,
  jsonDir:REPORT_OUTPUT_DIR,
  output: `${REPORT_OUTPUT_DIR}/report.html`,
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': '0.3.2',
    'Test Environment': 'STAGING',
    Browser: 'Chrome  54.0.2840.98',
    Platform: 'Windows 10',
    Parallel: 'Scenarios',
    Executed: 'Remote',
  },
};

reporter.generate(options);
