const write = require('./write');
const read = require('./read');
const ping = require('./ping');

module.exports = client => [{
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('HelloWorld');
  },
}].concat(write(client), read(client), ping);
