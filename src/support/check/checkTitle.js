import { client } from 'nightwatch-cucumber';
import { expect } from 'chai';
import isNegated from '../lib/isNegated';

/**
 * Check the title of the current browser window
 * @param  {Type}     falseCase     Whether to check if the title matches the
 *                                  expected value or not
 * @param  {Type}     expectedTitle The expected title
 */
export default function (falseCase, expectedTitle) {
  if (isNegated(falseCase)) {
    return client.getTitle(title => expect(title).not.to.equal(
      expectedTitle,
      `Expected title not to be "${expectedTitle}"`,
    ));
  }
  return client.getTitle(title => expect(title).to.equal(
    expectedTitle,
    `Expected title to be "${expectedTitle}" but found "${title}"`,
  ));
}
