const write = require('./write');
const read = require('./read');
const ping = require('./ping');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('HelloWorld');
  },
}].concat(write, read, ping);
