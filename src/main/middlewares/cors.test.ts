import request from 'supertest';
import app from '../config/app';

describe('CORS Middleware', () => {
  test('Should enale CORS', async () => {
    app.get('/test_cors', (request, response) => {
      response.send();
    });
    await request(app)
      .get('/test_cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-controll-allow-methods', '*')
      .expect('access-control-allow-headers', '*');
  });
});
