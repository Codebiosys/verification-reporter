import { When } from 'cucumber';

import waitForVisible from '../support/action/waitForVisible';
import waitTimeForVisible from '../support/action/waitTimeForVisible';
import waitTime from '../support/action/waitTime';
import enterInput from '../support/action/enterInput';
import clickElement from '../support/action/clickElement';

When(
  /^the user waits for the element "([^"]*)?" to( not)* be visible$/,
  waitForVisible,
);
When(
  /^the user waits for the element '([^']*)?' to( not)* be visible$/,
  waitForVisible,
);

When(
  /^the user waits ([\d]+) second[s]? for the element "([^"]*)?" to( not)* be visible$/,
  waitTimeForVisible,
);
When(
  /^the user waits ([\d]+) second[s]? for the element '([^']*)?' to( not)* be visible$/,
  waitTimeForVisible,
);

When(
  /^the user waits ([\d]+) second[s]?$/,
  waitTime,
);

When(
  /^the user enters "([^"]*)?" into input "([^"]*)?"$/,
  enterInput,
);
When(
  /^the user enters '([^']*)?' into input '([^']*)?'$/,
  enterInput,
);

When(
  /^the user presses the "([^"]*)?" button$/,
  clickElement,
);
When(
  /^the user presses the '([^']*)?' button$/,
  clickElement,
);
