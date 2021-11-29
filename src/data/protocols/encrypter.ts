export interface Encrypter {
  encrypt(valye: string): Promise<string>;
}
