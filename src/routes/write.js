const Models = require('../../models');
const createShort = require('../utils/helpers/createShort');


const recursion = (longUrl, start, end) => {
  const shortUrl = createShort(longUrl, start, end);
  return Models.urls.createObject(longUrl, shortUrl).spread((url, created) => {
    console.log('hi');
    if (created === false) {
      if (longUrl !== url.longUrl) {
        return recursion(longUrl, start + 1, end + 1);
      }
      return shortUrl;
    }

    return shortUrl;
  });
};


module.exports = [{
  method: 'POST',
  path: '/write/{longUrl}',
  handler: (request, reply) => {
    const { longUrl } = request.params;
    reply(recursion(longUrl, 0, 6));
  },
}];

