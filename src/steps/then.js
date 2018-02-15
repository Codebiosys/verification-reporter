import { Then } from 'cucumber';

import checkTitle from '../support/check/checkTitle';
import takeScreenshot from '../support/action/takeScreenshot';
import checkContainsText from '../support/check/checkContainsText';
import checkElementPresent from '../support/check/checkElementPresent';
import checkElementVisible from '../support/check/checkElementVisible';

Then(
  /^the title is( not)* "([^"]*)?"$/,
  checkTitle,
);
Then(
  /^the title is( not)* '([^']*)?'$/,
  checkTitle,
);

Then(
  /^the element "([^"]*)?" does( not)* contain the text "([^"]*)?"$/,
  checkContainsText,
);
Then(
  /^the element '([^']*)?' does( not)* contain the text '([^']*)?'$/,
  checkContainsText,
);

Then(
  /^take a screen shot$/,
  takeScreenshot,
);

Then(
  /^the element "([^"]*)?" is( not)* present/,
  checkElementPresent,
);
Then(
  /^the element '([^']*)?' is( not)* present/,
  checkElementPresent,
);

Then(
  /^the element "([^"]*)?" is( not)* visible$/,
  checkElementVisible,
);

Then(
  /^the element '([^']*)?' is( not)* visible$/,
  checkElementVisible,
);
