import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '../../presentation/protocols';
import { LogControllerDecorator } from './log';

const makeController = (): Controller => {
  class ControllerStub implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
      const httpResponse = {
        statusCode: 200,
        body: httpRequest.body,
      };
      return Promise.resolve(httpResponse);
    }
  }

  return new ControllerStub();
};

interface SutTypes {
  controllerStub: Controller;
  sut: LogControllerDecorator;
}

const makeSut = (): SutTypes => {
  const controllerStub = makeController();
  const sut = new LogControllerDecorator(controllerStub);

  return {
    sut,
    controllerStub,
  };
};

const httpRequest: HttpRequest = {
  body: {
    email: 'any_mail@email.com',
    name: 'any_name',
    password: 'any_password',
    passwordConfirmation: 'any_password',
  },
};

describe('LogController Decorator', () => {
  test('Should call controller handle', async () => {
    const { sut, controllerStub } = makeSut();
    const handleSpy = jest.spyOn(controllerStub, 'handle');

    await sut.handle(httpRequest);

    expect(handleSpy).toHaveBeenCalledWith(httpRequest);
  });
});
