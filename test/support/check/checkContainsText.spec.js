import checkContainsText from '../../../src/support/check/checkContainsText';

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

describe('checkContainsText', () => {
  it('should fail', () => {
    expect(true).toBe(false);
  });
});
