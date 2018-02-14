import { client } from 'nightwatch-cucumber';

/**
 * Open the given URL
 * @param  {String}   element The element to click
 */
export default (element) => {
  client.click(element);
};
