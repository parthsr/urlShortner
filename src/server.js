const Hapi = require('hapi');
const routes = require('./routes');
const Good = require('good');


const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(8080),
});
server.register({
  register: Good,
  options: {
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          response: '*',
          log: '*',
        }],
      }, {
        module: 'good-console',
      }, 'stdout'],
    },
  },
}, (err) => {
  if (err) {
    throw err;
  }
});

server.route(routes);
if (!module.parent) {
  server.start((err) => {
    console.log(err);
    console.log('Server running at:', server.info.uri);
  });
}

module.exports = server;
