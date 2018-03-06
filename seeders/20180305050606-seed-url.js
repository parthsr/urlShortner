const objCreation = require('../src/./utils/helpers/create-seeders');
const Models = require('../models');

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
    return queryInterface.bulkInsert('urls', Object.values(obj), {});
    // return queryInterface.bulkInsert('urls', obj, {});
  },

  down: (queryInterface, Sequelize) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    queryInterface.bulkDelete('urls', null, {})
  ,
};
