import { client } from 'nightwatch-cucumber';
import isNegated from '../lib/isNegated';

/**
* Check if the given element is (not) present
* @param  {String}   element   Element selector
* @param  {String}   falseCase Check for a present or absent element
*/
export default (elementName, falseCase) => {
  if (isNegated(falseCase)) {
    return client.assert.elementNotPresent(
      elementName,
      `Expected the element "${elementName}" to absent, but it was present."`,
    );
  }
  return client.assert.elementPresent(
    elementName,
    `Expected the element "${elementName}" to be present, but it was not."`,
  );
};
