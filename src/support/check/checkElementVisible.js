
import { client } from 'nightwatch-cucumber';
import isNegated from '../lib/isNegated';

/**
 * Check if the given element is (not) visible
 * @param  {Number}   seconds Wait a given amount of time
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
export default (elementName, falseCase) => {
  if (isNegated(falseCase)) {
    return client.assert.hidden(
      elementName,
      `Expected the element "${elementName}" to be present and hidden, but it was neither."`,
    );
  }
  return client.assert.visible(
    elementName,
    `Expected the element "${elementName}" to be present, but it was not."`,
  );
};
