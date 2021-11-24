import { MissingParamError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';
import { Controller } from '../http/controller';
import { HttpRequest, HttResponse } from '../http/http';

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttResponse {
    const requiredFileds = [
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
  }
}
