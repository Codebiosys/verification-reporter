import waitForVisible from '../../../src/support/action/waitForVisible';

jest.mock('nightwatch-cucumber', () => (
  {
    client: {
      url: jest.fn().mockReturnValue({
        waitForElementVisible: jest.fn(),
      }),
      launch_url: 'http://example.com',
    },
  }
));
import { client } from 'nightwatch-cucumber';

describe('waitForVisible', () => {
  it('should fail', () => {
    expect(true).toBe(false);
  });
});
