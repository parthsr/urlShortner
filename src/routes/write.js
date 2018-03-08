const recursion = require('../../src/utils/helpers/recursion');
const shortUrlFunction = require('../../src/utils/helpers/createShort');
const redisUtils = require('../utils/helpers/redisUtils');

module.exports = client => [{
  method: 'POST',
  path: '/write',
  handler: (request, reply) => {
    const { longUrl } = request.payload;
    const shortLongUrl = shortUrlFunction(longUrl);
    recursion(longUrl, shortLongUrl, 0, 6).then((shortUrl) => {
      redisUtils.redisWrite(longUrl, shortUrl, client);
      reply(shortUrl);
    });
  },
}];

