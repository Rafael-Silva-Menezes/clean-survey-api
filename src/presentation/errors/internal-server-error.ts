export class InternalServerError extends Error {
  constructor(stack?: string) {
    super('Internal Server error');
    this.name = 'ServerError';
    this.stack = stack;
  }
}
