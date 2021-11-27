import { InternalServerError } from '../errors';
import { HttResponse } from '../protocols';

export const badRequest = (error: Error): HttResponse => ({
  statusCode: 400,
  body: error,
});

export const serverError = (): HttResponse => ({
  statusCode: 500,
  body: new InternalServerError(),
});
