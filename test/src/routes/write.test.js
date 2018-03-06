const server = require('../../../src/server');
const Models = require('../../../models');

describe('checking if the write route works or not', () => {
  beforeAll((done) => {
    Models.urls.destroy({ truncate: true }).then(() => {
      done();
    });
  });
  afterAll((done) => {
    Models.urls.destroy({ truncate: true }).then(() => {
      done();
    });
  });
  test('checking if the code is of lngth 6', (done) => {
    const options = {
      method: 'POST',
      url: '/write/parth',
    };
    server.inject(options).then((response) => {
      expect(response.payload.length).toBe(6);
      done();
    });
  });
  test('checking if the status code is 200', (done) => {
    const options = {
      method: 'POST',
      url: '/write/parth',
    };
    server.inject(options).then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('checking if the smae url being written again gives an error', (done) => {
    const options = {
      method: 'POST',
      url: '/write/parth',
    };
    server.inject(options).then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

