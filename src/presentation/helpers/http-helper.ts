import { HttResponse } from '../http/http';

export const badRequest = (error: Error): HttResponse => ({
  statusCode: 400,
  body: error,
});
