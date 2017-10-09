import { defineSupportCode } from 'cucumber';
import openWebsite from '../support/action/openWebsite';
import resizeWindow from '../support/action/resizeWindow';
import waitForVisible from '../support/action/waitForVisible';
import waitTimeForVisible from '../support/action/waitTimeForVisible';

defineSupportCode(({ Given }) => {
  Given(
    /^the (url|site|page) "([^"]*)?" is open$/,
    openWebsite,
  );
  Given(
    /^the browser window is ([\d]+) by ([\d]+) pixels$/,
    resizeWindow,
  );

  Given(
    /^the element "([^"]*)?" is( not)* visible$/,
    waitForVisible,
  );

  Given(
    /^the element "([^"]*)?" is( not)* visible after ([\d]+) seconds$/,
    waitTimeForVisible,
  );
});
