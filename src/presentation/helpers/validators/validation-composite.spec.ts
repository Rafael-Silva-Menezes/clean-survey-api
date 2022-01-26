import { Validation } from '../../protocols';
import { MissingParamError } from '../../errors';
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
  sut: ValidationComposite;
  validationStubs: Validation[];
}

const makeSut = (): SutTypes => {
  const validationStubs = [makeValidationStub(), makeValidationStub()];
  const sut = new ValidationComposite(validationStubs);
  return {
    sut,
    validationStubs,
  };
};

describe('Validation Composite', () => {
  test('Should return an error if any validation fails', () => {
    const { sut, validationStubs } = makeSut();

    jest.spyOn(validationStubs[0], 'validate').mockReturnValueOnce(new Error());
    const errror = sut.validate({ field: 'any_value' });

    expect(errror).toEqual(new Error());
  });

  test('Should return the first error if more the one validation fails', () => {
    const { sut, validationStubs } = makeSut();

    jest.spyOn(validationStubs[0], 'validate').mockReturnValueOnce(new Error());
    jest
      .spyOn(validationStubs[1], 'validate')
      .mockReturnValueOnce(new MissingParamError('field'));

    const errror = sut.validate({ field: 'any_value' });

    expect(errror).toEqual(new Error());
  });

  test('Should not return if validation succeds', () => {
    const { sut } = makeSut();

    const errror = sut.validate({ field: 'any_value' });

    expect(errror).toBeFalsy();
  });
});
