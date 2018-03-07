const objCreation = require('../src/./utils/helpers/create-seeders');
const redis = require('redis');

const client = redis.createClient();
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const obj = objCreation(1000000);
    const objArray = Object.values(obj);
    objArray.map(item => client.hset(['urls', item.longUrl, item.shortUrl], redis.print));

    return queryInterface.bulkInsert('urls', Object.values(obj), {});
    // return queryInterface.bulkInsert('urls', obj, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    client.flushall();
    return queryInterface.bulkDelete('urls', null, {});
  },
};
