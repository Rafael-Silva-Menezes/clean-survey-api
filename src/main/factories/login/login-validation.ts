import { EmailValidatorAdapter } from '../../../infra/validators/email-validator-adapter';
import {
  ValidationComposite,
  RequiredFieldValidation,
  EmailValidation,
} from '../../../presentation/helpers/validators';
import { Validation } from '../../../presentation/protocols';

export const makeLoginValidation = (): Validation => {
  const validations: Validation[] = [];
  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldValidation(field));
  }

  validations.push(new EmailValidation('email', new EmailValidatorAdapter()));

  return new ValidationComposite(validations);
};