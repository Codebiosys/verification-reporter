import { When } from 'cucumber';

import waitForVisible from '../support/action/waitForVisible';
import waitTimeForVisible from '../support/action/waitTimeForVisible';
import enterInput from '../support/action/enterInput';
import clickElement from '../support/action/clickElement';

When(
  /^the element "([^"]*)?" is( not)* visible$/,
  waitForVisible,
);

When(
  /^the element "([^"]*)?" is( not)* visible after ([\d]+) seconds$/,
  waitTimeForVisible,
);

When(
  /^the user enters "([^"]*)?" into input "([^"]*)?"$/,
  enterInput,
);

When(
  /^the user presses the "([^"]*)?" button$/,
  clickElement,
);
