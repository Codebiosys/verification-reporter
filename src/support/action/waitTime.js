import { client } from 'nightwatch-cucumber';

/**
 * Check if the given element is (not) visible
 * @param  {Number}   seconds Wait a given amount of time
 */
export default seconds => client.pause(parseInt(seconds, 10) * 1000);
