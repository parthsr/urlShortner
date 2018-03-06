const recursion = require('../../../../src/utils/helpers/recursion');
const Models = require('../../../../models');
const createShortFunction = require('../../../../src/utils/helpers/createShort');

describe('checkig the recursion function, if it works or not', () => {
  afterEach((done) => {
    Models.urls.destroy({ truncate: true }).then(() => {
      done();
    });
  });
  test('checking if the function works for the first long url being inserted', (done) => {
    const longUrl = 'parthisthecoolestofalls';
    const shortUrl = createShortFunction(longUrl);
    recursion(longUrl, shortUrl, 0, 6).then((data) => {
      expect(data).toBe(shortUrl.slice(0, 6));
      done();
    });
  });
  test('checking if the function works for the first long url being inserted', (done) => {
    const longUrl = 'parthisthecoolestofalls';
    const shortUrl = createShortFunction(longUrl);
    const longUrl2 = 'parthisthecoolestofalls';
    const shortUrl2 = createShortFunction(longUrl2);
    recursion(longUrl, shortUrl, 0, 6).then((data1) => {
      expect(data1).toBe(shortUrl.slice(0, 6));
      recursion(longUrl2, shortUrl2, 0, 6).then((data2) => {
        expect(data2).toBe(shortUrl2.slice(0, 6));
        done();
      });
    });
  });
  test('checking if the function works for the first long url being inserted', (done) => {
    const longUrl = 'parthisthecoolestofalls';
    const shortUrl = createShortFunction(longUrl);
    const longUrl2 = 'parthisthecool';
    const shortUrl2 = shortUrl;
    recursion(longUrl, shortUrl, 0, 6).then((data1) => {
      expect(data1).toBe(shortUrl.slice(0, 6));
      recursion(longUrl2, shortUrl2, 0, 6).then((data2) => {
        expect(data2).toBe(shortUrl2.slice(1, 7));
        done();
      });
    });
  });
});

