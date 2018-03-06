const Hapi = require('hapi');
const routes = require('./routes');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(8080),
});
server.route(routes);
if (!module.parent) {
  server.start((err) => {
    console.log(err);
    console.log('Server running at:', server.info.uri);
  });
}

module.exports = server;
