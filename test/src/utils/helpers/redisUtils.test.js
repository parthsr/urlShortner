const redisUtils = require('../../../../src/utils/helpers/redisUtils');
const redis = require('redis');

describe('checking the write function works properly or not', () => {
  test('writing content in the redis', () => {
    const client = redis.createClient();
    redisUtils.redisWrite('thisIsthetestingfunction', '098765', client);
    client.hget('urls', '098765', (err, res) => {
      expect(res).not.toBe(null);
    });
  });
});
