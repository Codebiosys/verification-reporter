import { client } from 'nightwatch-cucumber';

/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 */
export default (type, page) => {
  const url = (type === 'url') ? page : client.launch_url + page;
  return client.url(url).waitForElementVisible('body', 1000);
};
