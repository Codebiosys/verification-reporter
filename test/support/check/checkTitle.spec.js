import checkTitle from '../../../src/support/check/checkTitle';

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

describe('checkTitle', () => {
  it('should fail', () => {
    expect(true).toBe(false);
  });
});
