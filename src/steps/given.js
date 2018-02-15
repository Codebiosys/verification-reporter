import { Given } from 'cucumber';
import openWebsite from '../support/action/openWebsite';
import resizeWindow from '../support/action/resizeWindow';

Given(
  /^the (url|site|page) "([^"]*)?" is open$/,
  openWebsite,
);
Given(
  /^the (url|site|page) '([^']*)?' is open$/,
  openWebsite,
);

Given(
  /^the browser window is ([\d]+) by ([\d]+) pixels$/,
  resizeWindow,
);
