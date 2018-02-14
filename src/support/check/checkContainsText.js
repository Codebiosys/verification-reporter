import { client } from 'nightwatch-cucumber';
import isNegated from '../lib/isNegated';

/**
 * Check if the given elements contains text
 * @param  {String}   element       Element selector
 * @param  {String}   falseCase     Whether to check if the content contains
 *                                  the given text or not
 * @param  {String}   expectedText  The text to check against
 */
export default function (elementName, falseCase, expectedText) {
  if (isNegated(falseCase)) {
    return client.expect.element(elementName).text.to.not.contain(
      expectedText,
      `Expected the element "${elementName}" to not to have text "${expectedText}, but it did."`,
    );
  }
  return client.expect.element(elementName).text.to.contain(
    expectedText,
    `Expected the element "${elementName}" to have text "${expectedText}, but it did not."`,
  );
}
