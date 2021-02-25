// MORSE TO ENGLISH == DECODE
// Decoding one single morse string into a letter

import {alphabet} from './dictionnary.js';

const decode = (letter) => {
  let engTranslation = '';

  Object.getOwnPropertyNames(alphabet).some(key => {
    if (alphabet[key] === letter) {
    engTranslation = key;
    return true;
    }
    });
  return engTranslation;
} 

const decodeString = (morseCode) => {
  let morseWord = morseCode.split(" ");
  let engWord = "";

  for (let i = 0; i < morseWord.length; i++){
    let engLetter = decode(morseWord[i]);
    engWord = engWord.concat(engLetter);
    }
    return engWord;
}

export {decode, decodeString};