const md5 = require('md5');

const createShort = (longUrl, start, end) => {
  const shortUrl = md5(longUrl).slice(start, end);
  return shortUrl;
};
module.exports = createShort;
