import resizeWindow from '../../../src/support/action/resizeWindow';

jest.mock('nightwatch-cucumber', () => ({
  client: {
    resizeWindow: jest.fn().mockReturnValue({
      then: () => {},
    }),
  },
}));
import { client } from 'nightwatch-cucumber';


describe('resizeWindow', () => {
  it('should call the client resize with the new width and height', () => {
    resizeWindow(1024, 768);
    expect(client.resizeWindow).toHaveBeenCalledTimes(1);
    expect(client.resizeWindow)
      .toHaveBeenCalledWith(1024, 768);
  });

  it('should call the client resize when passed stringified numbers', () => {
    resizeWindow('1024', '768');
    expect(client.resizeWindow).toHaveBeenCalledTimes(1);
    expect(client.resizeWindow)
      .toHaveBeenCalledWith(1024, 768);
  });
});
