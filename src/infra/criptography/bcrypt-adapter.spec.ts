import { BcryptAdpater } from './bcrypt-adapter';
import bcrypt from 'bcrypt';

const makeSut = (salt: number): BcryptAdpater => {
  return new BcryptAdpater(salt);
};
describe('Bcrypt Adapter', () => {
  test('Shoul call bcrypt with correct values', async () => {
    const salt = 12;
    const sut = makeSut(salt);
    const hashSpy = jest.spyOn(bcrypt, 'hash');
    await sut.encrypt('any_value');
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt);
  });
});
