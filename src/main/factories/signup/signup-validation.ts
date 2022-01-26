import { EmailValidatorAdapter } from '../../../infra/validators/email-validator-adapter';
import {
  ValidationComposite,
  CompareFieldsValidation,
  RequiredFieldValidation,
  EmailValidation,
} from '../../../presentation/helpers/validators';
import { Validation } from '../../../presentation/protocols';

export const makeSignUpValidation = (): Validation => {
  const validations: Validation[] = [];
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field));
  }

  validations.push(
    new CompareFieldsValidation('password', 'passwordConfirmation'),
  );
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()));

  return new ValidationComposite(validations);
};
