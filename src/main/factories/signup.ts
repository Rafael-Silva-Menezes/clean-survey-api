import { DbAddAccount } from '../../data/usecases/add-account/db-add-account';
import { BcryptAdapter } from '../../infra/cryptography/bcrypt-adapter';
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository';
import { EmailValidatorAdapter } from '../../infra/validators/email-validator-adapter';
import { SignUpController } from '../../presentation/controllers/signup/signup';
import { Controller } from '../../presentation/protocols';
import { LogControllerDecorator } from '../decorators/log';

export const makeSignUpController = (): Controller => {
  const encrypter = new BcryptAdapter(12);
  const addAccountRepository = new AccountMongoRepository();
  const addAccount = new DbAddAccount(encrypter, addAccountRepository);

  const emailValidator = new EmailValidatorAdapter();

  const signUpController = new SignUpController(emailValidator, addAccount);

  return new LogControllerDecorator(signUpController);
};
