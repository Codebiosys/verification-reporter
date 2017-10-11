import waitForVisible from '../../../src/support/action/waitForVisible';

jest.mock('../../../src/support/action/waitTimeForVisible');

import waitTimeForVisible from '../../../src/support/action/waitTimeForVisible';

describe('waitForVisible', () => {
  it('Wait for 3000 milliseconds', () => {
    waitForVisible('.element', '');
    expect(waitTimeForVisible).toHaveBeenCalledTimes(1);
    expect(waitTimeForVisible).toHaveBeenCalledWith('.element', '', 3000);
  });
});
