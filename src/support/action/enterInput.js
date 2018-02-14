import { client } from 'nightwatch-cucumber';

/**
 * Open the given URL
 * @param  {String}   content The content to enter
 * @param  {String}   input The input to enter data into
 */
export default (content, input) => {
  client.setValue(input, content);
};
