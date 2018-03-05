const md5 = require('md5');


const objCreation = (max) => {
  const obj = {};
  for (let i = 0; i < max; i += 1) {
    const longUrl = `http://mylongurl${i}`;
    let shortUrl = md5(longUrl).slice(0, 6);
    let head = 1;
    while (true) {
      head %= 32;
      if (obj[shortUrl] === undefined) {
        break;
      } else {
        shortUrl = md5(longUrl).slice(head, head + 6);
        head += 1;
      }
    }
    obj[shortUrl] = { shortUrl, longUrl };
  }
  return obj;
};

module.exports = objCreation;

