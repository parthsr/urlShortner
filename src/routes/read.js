const longUrlFunction = require('../utils/helpers/findLong');
const redisUtils = require('../utils/helpers/redisUtils');

module.exports = client => [{
  method: 'GET',
  path: '/read',
  handler: (request, reply) => {
    const shortUrl = request.query.q;
    client.hget('urls', shortUrl, (err, response) => {
      if (JSON.stringify(response) !== 'null') {
        const value = response;
        reply(value);
      } else {
        longUrlFunction(shortUrl).then((longUrl) => {
          redisUtils.redisWrite(longUrl, shortUrl, client);
          reply(longUrl);
        });
      }
    });
  },
}];

