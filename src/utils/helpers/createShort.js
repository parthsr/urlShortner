const md5 = require('md5');
const bases = require('bases');

const createShort = (longUrl) => {
  const shortUrl = bases.toBase62(bases.fromBase16(md5(longUrl)));
  return shortUrl;
};
module.exports = createShort;
