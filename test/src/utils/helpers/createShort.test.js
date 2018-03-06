const createShort = require('../../../../src/utils/helpers/createShort');

describe('testing the create short function that creates the short url', () => {
  test('checking if the function returns a string', () => {
    expect(typeof createShort('parthiscoolveryverycool', 0, 6)).toBe('string');
  });
  test('checking if the function returns a string', () => {
    expect(createShort('parthiscoolveryverycool', 0, 6).length).toBe(22);
  });
  test('checking if the function returns a string', () => {
    const format = /[ !@#$%^&*()+\-=\[\]{};'"\\|,.<>?]/;
    expect(format.test(createShort('http://parthiscoolveryverycool', 0, 6))).toBe(false);
  });
});
