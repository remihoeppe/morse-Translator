// import { decode, decodeString } from './decode.js';
// import { encode, encodeString } from './decode.js';
// import { alphabet, morse } from './dictionnary.js';

const { decode, decodeString } = require('./decode.js');
const { encode, encodeString } = require('./encode.js');
const { alphabet, morse } = require('./dictionnary.js');

const invalidError = new Error('This is an invalid input');
const notInDictionnaryError = new Error('This character/morse code is not in the dictionnary.');
const argNotAnObject = new Error('The second argument is not an Object')

describe('Decode / Encode Functions', () => {
  test('For characters not in dictionnary', () => {
    expect(() => decode('&', morse)).toThrowError(notInDictionnaryError);
    expect(() => encode('&', alphabet)).toThrowError(notInDictionnaryError);
  });

  test('For charachter that DOES exist in dictionnary', () => {
    expect(decode('...', morse)).toBe(morse['...']);
    expect(encode('s', alphabet)).toBe(alphabet['s']);
  });
});



describe('DecodeString / EncodeString Functions', () => {
const notAnObject = [1,2,3]

  test('Second argument is not an Object', () =>  {
    expect(() => decodeString('word', notAnObject)).toThrowError(argNotAnObject);
    expect(() => encodeString('word', notAnObject)).toThrowError(argNotAnObject);
  });

  test('Input is a not a string', () => {
    expect(() => decodeString([1,2,3], morse).toThrowError(invalidError));
    expect(() => encodeString([1,2,3], alphabet).toThrowError(invalidError));
  });

  test('The output is a string', () => {
    expect(typeof decodeString('.-- --- .-. -..', morse)).toBe('string');
    expect(typeof encodeString('word', alphabet)).toBe('string');
  });

  test('Output is as expected', () => {
    expect(decodeString('.-- --- .-. -..', morse)).toBe('word');
    expect(encodeString('word', alphabet)).toBe('.-- --- .-. -..');
  })
});