// ENGLISH TO MORSE  == ENCODE
//Encoding one single letter into a morse string

const encode = (letter, object) => {
  if(!Object.keys(object).includes(letter)) {
    throw new Error('This character/morse code is not in the dictionnary.')
  }
//  const morseTranslation = Object.getOwnPropertyNames(object).find(key => object[key] === letter)
  
  // return morseTranslation;
  return object[letter];

}

// Encodes words (contained in a single string) into morse (contained in a single string) each morse letter separated with a space and each word separated by a /

const encodeString = (textEng, object) => {
  if(typeof textEng !== 'string') {
    throw new Error ('This is an invalid input');
  }
  if(!object || object.constructor.name !== "Object") {
    throw new Error ('The second argument is not an Object')
  }

  const morseWord = textEng.toLowerCase().split("").map(letter => encode(letter, object)).join(" ")

  return morseWord;
}

export {encode, encodeString};

// module.exports = {
//   encode, 
//   encodeString
// };