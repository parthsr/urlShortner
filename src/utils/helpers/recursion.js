const Models = require('../../../models');

const recursion = (longUrl, shortUrl, start, end) => {
  const shortUrlnew = shortUrl.slice(start, end);
  return Models.urls.createObject(longUrl, shortUrlnew).spread((url, created) => {
    console.log('hi');
    if (created === false) {
      if (longUrl !== url.longUrl) {
        return recursion(longUrl, shortUrl, start + 1, end + 1);
      }
      return shortUrlnew;
    }

    return shortUrlnew;
  });
};

module.exports = recursion;
