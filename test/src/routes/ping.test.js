const server = require('../../../src/server');

describe('checking ping route', () => {
  test('checking ping', (done) => {
    const options = {
      method: 'GET',
      url: '/ping',
    };
    server.inject(options).then((response) => {
      expect(response.result).toBe('pong');
      done();
    });
  });
});
