import { MongoHelper } from '../infra/db/mongodb/mongo-helper';
import env from './config/env';

MongoHelper.connect(
  'mongodb://root:o9wsQKZ1B048a1rzi2bVT757zppk4le0Ma@10.167.72.47:27017/clean-node?authSource=admin',
)
  .then(async () => {
    const app = (await import('./config/app')).default;
    app.listen(env.port, () =>
      console.log(`Server running at http://localhost:${env.port}`),
    );
  })
  .catch(console.error);
