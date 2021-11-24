import { MissingParamError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';
import { HttpRequest, HttResponse } from '../http/http';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttResponse {
    const requiredFileds = ['name', 'email'];
    for (const field of requiredFileds) {
      if (!httpRequest?.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}
