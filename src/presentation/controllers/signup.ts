import { MissingParamError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';
import { HttpRequest, HttResponse } from '../http/http';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttResponse {
    if (!httpRequest?.body.name) {
      return badRequest(new MissingParamError('name'));
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'));
    }
  }
}
