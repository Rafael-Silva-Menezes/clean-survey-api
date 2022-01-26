import { Validation } from '..';
import { ValidationComposite } from './validation-composite';

const makeValidationStub = (): Validation => {
  class ValidationStub implements Validation {
    validate(input: any): Error {
      return null;
    }
  }
  return new ValidationStub();
};

interface SutTypes {
  validationStub: Validation;
  sut: ValidationComposite;
}

const makeSut = (): SutTypes => {
  const validationStub = makeValidationStub();
  const sut = new ValidationComposite([validationStub]);
  return {
    sut,
    validationStub,
  };
};

describe('Validation Composite', () => {
  test('Should return an error if any validation fails', () => {
    const { sut, validationStub } = makeSut();

    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error());
    const errror = sut.validate({ field: 'any_value' });

    expect(errror).toEqual(new Error());
  });
});
