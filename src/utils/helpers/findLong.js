const Models = require('../../../models');

const findLong = shortUrl => Models.urls.findOne({
  where: {
    shortUrl,
  },
}).then((result) => {
  if (!result || result.length === 0) {
    return 'Not found';
  }
  return result.longUrl;
});

module.exports = findLong;
