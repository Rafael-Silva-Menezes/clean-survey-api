import {
  AccountModel,
  AddAccountModel,
  AddAccountRepository,
} from '../../../data/usecases/add-account/db-add-account-protocols';
import { MongoHelper } from './mongo-helper';

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts');
    const result = await accountCollection.insertOne(accountData);
    return MongoHelper.map(result.ops[0]);
  }
}
