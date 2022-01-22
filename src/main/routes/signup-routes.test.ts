import request from 'supertest';
import app from '../config/app';

describe('SigUpRoutes Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'John Doe',
        email: 'johndoe@email.com',
        passowrd: '12345',
        passwordConfirmation: '12345',
      })
      .expect(200);
  });
});
