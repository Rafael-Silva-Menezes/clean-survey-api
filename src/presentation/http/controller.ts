import { HttpRequest, HttResponse } from '../http/http';

export interface Controller {
  handle(httpRequest: HttpRequest): HttResponse;
}
