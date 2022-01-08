import request from 'supertest';
import app from '../config/app';

describe('SignUp Routes', () => {
  it('Should return an account on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password: 'john123',
        passwordConfirmation: 'john123',
      })
      .expect(200);
  });
});
