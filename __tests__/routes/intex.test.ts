import request from 'supertest';
import app from '../../src/app';

describe('Routes tests', () => {
  test('Returns error when request body is empty', async () => {
    const res = await request(app).post('/');
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({
      response: 'Error: You must provide your birthday',
    });
  });

  test('Returns the age on a planet', async () => {
    const res = await request(app).post('/').send({
      birthDay: '1990-01-01T00:00:00.000Z',
      type: 'earth',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ response: 'You are 34.05 Earth-years-old' });
  });
});
