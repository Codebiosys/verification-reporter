import { defineSupportCode } from 'cucumber';

import checkTitle from '../support/check/checkTitle';
import takeScreenshot from '../support/action/takeScreenshot';
import checkContainsText from '../support/check/checkContainsText';

defineSupportCode(({ Then }) => {
  Then(
    /^the title is( not)* "([^"]*)?"$/,
    checkTitle,
  );

  Then(
    /^the element "([^"]*)?" does( not)* contain the text "([^"]*)?"$/,
    checkContainsText,
  );

  Then(
    /^take a screen shot$/,
    takeScreenshot,
  );
});
