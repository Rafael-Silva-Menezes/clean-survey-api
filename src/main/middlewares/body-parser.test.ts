import httpRequest from 'supertest';
import app from '../config/app';

describe('Body Parser Middleware', () => {
  test('Should parse as json', async () => {
    app.post('/test_body_parser', (request, response) => {
      response.send(request.body);
    });
    await httpRequest(app).post('/test_body_parser').send({ name: 'John Doe' }).expect({ name: 'John Doe' });
  });
});
