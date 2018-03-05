module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('urls', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    longUrl: {
      type: Sequelize.STRING,
    },
    shortUrl: {
      type: Sequelize.STRING,
      unique: true,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('urls'),
};
