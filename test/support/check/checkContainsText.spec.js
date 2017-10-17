import checkContainsText from '../../../src/support/check/checkContainsText';

jest.mock('../../../src/support/lib/isNegated', () => bool => !bool);

jest.mock('nightwatch-cucumber', () => (
  {
    client: {
      waitForElementNotVisible: jest.fn(),
      waitForElementVisible: jest.fn(),
    },
  }
));

import { client } from 'nightwatch-cucumber';

describe('checkContainsText', () => {
  it('should fail', () => {
    expect(true).toBe(false);
  });
});
