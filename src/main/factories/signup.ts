import { DbAddAccount } from '../../data/usecases/add-account/db-add-account';
import { BcryptAdapter } from '../../infra/cryptography/bcrypt-adapter';
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account';
import { LogMongoRepository } from '../../infra/db/mongodb/log-repository/log';
import { EmailValidatorAdapter } from '../../infra/validators/email-validator-adapter';
import { SignUpController } from '../../presentation/controllers/signup/signup';
import { Controller } from '../../presentation/protocols';
import { LogControllerDecorator } from '../decorators/log';
import { makeSignUpValidation } from './signup-validation';

export const makeSignUpController = (): Controller => {
  const encrypter = new BcryptAdapter(12);
  const addAccountRepository = new AccountMongoRepository();

  const addAccount = new DbAddAccount(encrypter, addAccountRepository);
  const emailValidator = new EmailValidatorAdapter();

  const signUpController = new SignUpController(
    emailValidator,
    addAccount,
    makeSignUpValidation(),
  );
  const logErrorRepository = new LogMongoRepository();

  return new LogControllerDecorator(signUpController, logErrorRepository);
};
