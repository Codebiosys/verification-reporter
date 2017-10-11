import takeScreenshot from '../../../src/support/action/takeScreenshot';

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

describe('takeScreenshot', () => {
  it('should fail', () => {
    expect(true).toBe(false);
  });
});
