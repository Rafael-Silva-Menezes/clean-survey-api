import { HttpRequest, HttResponse } from './http';

export interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttResponse>;
}
