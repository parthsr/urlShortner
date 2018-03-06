const objCreation = require('../../../../src/utils/helpers/create-seeders');

describe('testing the seeder helper functions', () => {
  test('testing if the file returns an object or not', () => {
    expect(typeof objCreation(10)).toBe('object');
  });
  test('testing if the file returns an object or not', () => {
    expect(Object.keys(objCreation(10)).length).toBe(10);
  });
});

