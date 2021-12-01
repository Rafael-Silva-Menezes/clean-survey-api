import request from 'supertest';
import app from '../config/app';

describe('SignUp Rotues', () => {
  test('Should return an account on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'John Doe',
        email: 'john_doe@gmail.com',
        password: '12345',
        passwordConfimartion: '12345',
      })
      .expect(200);
  });
});
