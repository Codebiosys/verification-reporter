import waitTimeForVisible from '../../../src/support/action/waitTimeForVisible';

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

describe('waitTimeForVisible', () => {
  it('should wait 4000 milliseconds for the element to be visible', () => {
    waitTimeForVisible('.element', true, 4);
    expect(client.waitForElementVisible).toHaveBeenCalledWith('.element', 4000);
  });

  it('should wait 4000 milliseconds for the element to be visible when called with a string', () => {
    waitTimeForVisible('.element', true, '4');
    expect(client.waitForElementVisible).toHaveBeenCalledWith('.element', 4000);
  });
  it('should wait 4000 milliseconds for the element to not be visible', () => {
    waitTimeForVisible('.element', false, 4);
    expect(client.waitForElementNotVisible).toHaveBeenCalledWith('.element', 4000);
  });

  it('should wait 4000 milliseconds for the element to not be visible when called with a string', () => {
    waitTimeForVisible('.element', false, '4');
    expect(client.waitForElementNotVisible).toHaveBeenCalledWith('.element', 4000);
  });
});
