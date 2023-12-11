import request from 'supertest';
import app from '../../src/app';

describe('Routes tests', () => {
  test('Returns error when request body is empty', async () => {
    const res = await request(app).post('/age-on-planet');
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({
      response: 'Error: You must provide seconds',
    });
  });

  test('Returns the age on a planet', async () => {
    const res = await request(app).post('/age-on-planet').send({
      seconds: 2500000000,
      type: 'earth',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ response: 'You are 79.22 Earth-years-old' });
  });
});
