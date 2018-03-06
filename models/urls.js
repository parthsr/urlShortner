module.exports = (sequelize, DataTypes) => {
  const urls = sequelize.define('urls', {
    longUrl: DataTypes.STRING,
    shortUrl: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [6, 6],
      },
    },

  }, {});
  urls.createObject = (longUrl, shortUrl) => urls.findOrCreate({
    where: {
      shortUrl,
    },
    defaults: {
      longUrl,
      createdAt: new Date(),
      updateAt: new Date(),
    },
  });
  return urls;
};
