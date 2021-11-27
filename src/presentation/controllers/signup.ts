import { MissingParamError, InvalidParamError } from '../errors';
import { badRequest, serverError } from '../helpers';
import {
  Controller,
  EmailValidator,
  HttpRequest,
  HttResponse,
} from '../protocols';

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator;
  }

  handle(httpRequest: HttpRequest): HttResponse {
    try {
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

      if (httpRequest.body.password !== httpRequest.body.passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'));
      }
      const isValid: boolean = this.emailValidator.isValid(
        httpRequest.body.email,
      );

      if (!isValid) {
        return badRequest(new InvalidParamError('email'));
      }
    } catch (error) {
      return serverError();
    }
  }
}
