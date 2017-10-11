import openWebsite from '../../../src/support/action/openWebsite';

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

describe('openWebsite', () => {
  beforeEach(() => {
  });
  afterEach(() => {
  });

  it('should call url with the given url if the first param is `url`', () => {
    openWebsite('url', 'http://example2.com');
    expect(client.url).toHaveBeenCalledTimes(1);
    expect(client.url)
      .toHaveBeenCalledWith('http://example2.com');
  });

  it(
    'should call url with the given path on the local_url if the first ' +
        'param is `site`',
    () => {
      openWebsite('site', '/path/to/page');
      expect(client.url).toHaveBeenCalledTimes(1);
      expect(client.url)
        .toHaveBeenCalledWith('http://example.com/path/to/page');
    },
  );

  it(
    'should call url with the given path on the local_url if the first ' +
        'param is `page`',
    () => {
      openWebsite('site', '/path/to/another/page');
      expect(client.url).toHaveBeenCalledTimes(1);
      expect(client.url)
        .toHaveBeenCalledWith('http://example.com/path/to/another/page');
    },
  );
});
