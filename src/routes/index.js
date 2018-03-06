const write = require('./write');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('HelloWorld');
  },
}].concat(write);
