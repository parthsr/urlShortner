

module.exports = (sequelize, DataTypes) => {
  const url = sequelize.define('url', {
    longUrl: DataTypes.STRING,
    shortUrl: { type: DataTypes.STRING, unique: true },
  }, {});
  url.createObject = (longUrl, shortUrl) => url.findOrCreate({
    where: { longUrl },
    defaults: { shortUrl },
  });
  return url;
};
