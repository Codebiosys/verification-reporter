import takeScreenshot from '../../../src/support/action/takeScreenshot';

jest.mock('nightwatch-cucumber', () => ({
  client: {
    screenshot: (bool, callback) => { callback({ value: 'foo' }); return { then: () => {} }; },
  },
}));

const attach = jest.fn();
const world = {
  takeScreenshot,
  attach,
};

describe('takeScreenshot', () => {
  it('a screenshot is taken', () => {
    world.takeScreenshot();
    expect(attach).toHaveBeenCalledTimes(1);
    expect(attach).toHaveBeenCalledWith('foo', 'image/png');
  });
});
