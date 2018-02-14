import { client } from 'nightwatch-cucumber';
import isNegated from '../lib/isNegated';

/**
 * Check if the given element is (not) visible
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 * @param  {String}   seconds Wait a given amount of time
 */
export default (element, falseCase, seconds) => {
  if (isNegated(falseCase)) {
    return client.waitForElementNotVisible(element, parseInt(seconds, 10) * 1000); // 3 seconds
  }
  return client.waitForElementVisible(element, parseInt(seconds, 10) * 1000); // 3 seconds
};
