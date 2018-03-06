

module.exports = (sequelize, DataTypes) => {
  const urls = sequelize.define('urls', {
    longUrl: DataTypes.STRING,
    shortUrl: { type: DataTypes.STRING, unique: true },
  }, {});
  urls.createObject = (shortUrl, longUrl) => urls.findOrCreate({
    where: {
      shortUrl,
    },
    defaults: {
      longUrl,
    },
  });
  return urls;
};
