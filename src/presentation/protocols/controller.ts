import { HttpRequest, HttResponse } from '.';

export interface Controller {
  handle(httpRequest: HttpRequest): HttResponse;
}
