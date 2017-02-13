import message from '../index';

describe('the message() function', () => {
  it('has a default', () => {
    expect(message()).toEqual('Hello, world');
  });

  it('returns its argument', () => {
    expect(message('Hi')).toEqual('Hi');
  });
});