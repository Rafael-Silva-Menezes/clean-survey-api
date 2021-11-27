import { InternalServerError } from '../errors/internal-server-error';
import { HttResponse } from '../http/http';

export const badRequest = (error: Error): HttResponse => ({
  statusCode: 400,
  body: error,
});

export const serverError = (): HttResponse => ({
  statusCode: 500,
  body: new InternalServerError(),
});
