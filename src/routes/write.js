const recursion = require('../../src/utils/helpers/recursion');
const shortUrlFunction = require('../../src/utils/helpers/createShort');

module.exports = [{
  method: 'POST',
  path: '/write/{longUrl}',
  handler: (request, reply) => {
    const { longUrl } = request.params;
    const shortUrl = shortUrlFunction(longUrl);
    reply(recursion(longUrl, shortUrl, 0, 6));
  },
}];

