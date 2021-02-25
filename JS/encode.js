// ENGLISH TO MORSE  == ENCODE
//Encoding one single letter into a morse string

import {morse} from './dictionnary.js';

const encode = (letter) => {
  let morseTranslation = '';
  
  Object.getOwnPropertyNames(morse).some(key => {
    if (morse[key] === letter) {
      morseTranslation = key;
      return true;
    }
    });
  return morseTranslation;
}

// Encodes words (contained in a single string) into morse (contained in a single string) each morse letter separated with a space and each word separated by a /
const encodeString = (textEng) => {
  let morseWord = '';


  
  for (let i = 0; i < textEng.length; i++) {
    let letter = textEng.charAt(i)
    let morseLetter = encode(letter)
    morseWord = morseWord.concat(" ",morseLetter)
    }
  return morseWord;
}

export {encode, encodeString};