import request from 'supertest';
import app from '../config/app';
import { MongoHelper } from '../../infra/db/mongodb/mongo-helper';

describe('SignUp Rotues', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    const accountCollection = await MongoHelper.getCollection('accounts');
    await accountCollection.deleteMany({});
  });
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
