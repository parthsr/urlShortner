const findLong = require('../../../../src/utils/helpers/findLong');
const Models = require('../../../../models');

describe('checking the findLong function', () => {
  beforeAll((done) => {
    Models.urls.create({
      shortUrl: '757575',
      longUrl: 'http://iamcool.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }).then(() => {
      done();
    });
  });

  test('checking if the inserting is being done', (done) => {
    findLong('757575').then((data) => {
      expect(data).toBe('http://iamcool.com');
      done();
    });
  });
  test('checking if the inserting is being done', (done) => {
    findLong('754545').then((data) => {
      expect(data).toBe('Not found');
      done();
    });
  });
});

