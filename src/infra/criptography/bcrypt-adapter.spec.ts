import { BcryptAdpater } from './bcrypt-adapter';
import bcrypt from 'bcrypt';

jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return new Promise(resolve => resolve('hash'));
  },
}));

const salt = 12;
const makeSut = (): BcryptAdpater => {
  return new BcryptAdpater(salt);
};
describe('Bcrypt Adapter', () => {
  test('Shoul call bcrypt with correct values', async () => {
    const sut = makeSut();
    const hashSpy = jest.spyOn(bcrypt, 'hash');
    await sut.encrypt('any_value');
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt);
  });

  test('Shoul return a hash on sucess', async () => {
    const sut = makeSut();
    const hash = await sut.encrypt('any_value');
    expect(hash).toBe('hash');
  });
});
