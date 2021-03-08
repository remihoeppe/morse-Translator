// MORSE TO ENGLISH == DECODE
// Decoding one single morse string into a letter

const decode = (letter, object) => {
  if(!object.hasOwnProperty(letter)) {
    throw new Error('This character/morse code is not in the dictionnary.');
  }

  // const engTranslation = Object.getOwnPropertyNames(object).find(key => object[key] === letter);
  
  // return engTranslation;
  return object[letter];
};

const decodeString = (morseCode, object) => {
  if(typeof morseCode !== 'string') {
    throw new Error ('This is an invalid input');
  }
  if(!object || object.constructor.name !== "Object") {
    throw new Error ('The second argument is not an Object')
  }

 const engWord =  morseCode.split(" ").map(morseLetter => decode(morseLetter, object)).join("")

 return engWord;
}

export {decode, decodeString};

// module.exports = {
//   decode,
//   decodeString
// }