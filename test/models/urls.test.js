const Models = require('../../models');

describe('checking the models whether inserting works or not', () => {
  beforeEach((done) => {
    Models.urls.destroy({ truncate: true });
    done();
  });
  test('checking for a single url ', (done) => {
    const longUrl = 'http://coolerst.com';
    const shortUrl = 'yuiops';
    Models.urls.createObject(longUrl, shortUrl).spread((urlRecord, created) => {
      expect(created).toBe(true);
      done();
    });
  });
  test('checking for same long url being sent again ', (done) => {
    const longUrl = 'http://coolerst.com';
    const shortUrl = 'yuiops';
    Models.urls.createObject(longUrl, shortUrl).spread((urlRecord, created) => {
      expect(created).toBe(true);
      done();
    }).then(() => {
      Models.urls.createObject(longUrl, shortUrl).spread((urlRecordSecond, createdSecond) => {
        expect(createdSecond).toBe(false);
        done();
      });
    });
  });
  test('checking for shorturl being sent for more than 6 length ', (done) => {
    const longUrl = 'http://coolerst.com';
    const shortUrl = 'yuiopsads';
    Models.urls.createObject(longUrl, shortUrl).catch((error) => {
      expect(error.message).toEqual('Validation error: Validation len on shortUrl failed');
      done();
    });
  });
});
