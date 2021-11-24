import { InvalidParamError } from '../errors/invalid-param-error';
import { MissingParamError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';
import { Controller } from '../http/controller';
import { EmailValidator } from '../http/email-validator';
import { HttpRequest, HttResponse } from '../http/http';

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator;
  }

  handle(httpRequest: HttpRequest): HttResponse {
    const requiredFileds: string[] = [
      'name',
      'email',
      'password',
      'passwordConfirmation',
    ];
    for (const field of requiredFileds) {
      if (!httpRequest?.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
    const isValid: boolean = this.emailValidator.isValid(
      httpRequest.body.email,
    );

    if (!isValid) {
      return badRequest(new InvalidParamError('email'));
    }
  }
}
