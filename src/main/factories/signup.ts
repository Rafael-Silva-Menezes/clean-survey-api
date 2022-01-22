import { DbAddAccount } from '../../data/usecases/add-account/db-add-account';
import { BcryptAdapter } from '../../infra/cryptography/bcrypt-adapter';
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository';
import { EmailValidatorAdapter } from '../../infra/validators/email-validator-adapter';
import { SignUpController } from '../../presentation/controllers/signup/signup';

export const makeSignUpController = (): SignUpController => {
  const encrypter = new BcryptAdapter(12);
  const addAccountRepository = new AccountMongoRepository();
  const addAccount = new DbAddAccount(encrypter, addAccountRepository);

  const emailValidator = new EmailValidatorAdapter();

  const signUpController = new SignUpController(emailValidator, addAccount);

  return signUpController;
};
