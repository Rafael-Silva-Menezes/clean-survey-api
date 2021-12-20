import { InternalServerError } from '../errors';
import { HttResponse } from '../protocols';

export const badRequest = (error: Error): HttResponse => ({
  statusCode: 400,
  body: error,
});

export const serverError = (error: Error): HttResponse => ({
  statusCode: 500,
  body: new InternalServerError(error.stack),
});

export const ok = (data: any): HttResponse => ({
  statusCode: 200,
  body: data,
});
