const server = require('../../../src/server');
const Models = require('../../../models');
const redisUtils = require('../../../src/utils/helpers/redisUtils');
const redis = require('redis');

describe('checking the read api, whether it is working or not with the database not empty', () => {
  beforeAll((done) => {
    Models.urls.create({
      shortUrl: 130204,
      longUrl: 'parthtesting123',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    done();
  });
  test('checking for statuscode 200', (done) => {
    const options = {
      method: 'GET',
      url: '/read?q=130204',
    };
    server.inject(options).then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('checking if the result is present or not', (done) => {
    const options = {
      method: 'GET',
      url: '/read?q=130204',
    };
    server.inject(options).then((response) => {
      expect(response.result.length).toBeGreaterThan(0);
      done();
    });
  });
});

describe('checking the read api, whether it is working or not with the database  empty', () => {
  const client = redis.createClient();
  beforeAll((done) => {
    Models.urls.destroy({
      truncate: true,
    }).then(() => {
      redisUtils.redisWrite('130204', 'parthisthecoolestofall', client);
    });
    done();
  });
  test('checking for statuscode 200', (done) => {
    const options = {
      method: 'GET',
      url: '/read?q=130204',
    };
    server.inject(options).then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('checking if the result is present or not', (done) => {
    const options = {
      method: 'GET',
      url: '/read?q=130204',
    };
    server.inject(options).then((response) => {
      expect(response.result.length).toBeGreaterThan(0);
      done();
    });
  });
  test('checking if the result is present or not', (done) => {
    const options = {
      method: 'GET',
      url: '/read?q=130204',
    };
    server.inject(options).then((response) => {
      client.hget('urls', 130204, (err, res) => {
        expect(res).toBe(response.result);
      });
      done();
    });
  });
});

