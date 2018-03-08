const redis = require('redis');

const redisWrite = (longUrl, shortUrl, client) => {
  client.hset('urls', shortUrl, longUrl, redis.print);
};

// const redisRead = (shortUrl, client) => {
//   client.hget('urls', shortUrl, response => response.Reply);
//   console.log(value);
//   return value;
// };
module.exports = {
  redisWrite,
  // redisRead,
};
