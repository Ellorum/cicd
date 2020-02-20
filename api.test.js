const request = require('supertest');
const {server} = require('./server');

describe('Get Endpoints', () => {
  it('GET /', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(200);
    console.log(res);
    expect(res.body).toHaveProperty('hello');
  })
})