
import {encodeString} from './encode.js';
import {decodeString} from './decode.js';
import { alphabet, morse } from './dictionnary.js';

// const { decodeString } = require('./decode.js');
// const { encodeString } = require('./encode.js');
// const { alphabet, morse } = require('./dictionnary.js');



const inputEng = document.getElementById('btnEngToMorse')
const inputMorse = document.getElementById('btnMorseToEng')

inputEng.addEventListener('click', function (event) {
  event.preventDefault();
  const textEng = document.getElementById('textInput').value;
  document.getElementById('morseInput').value = encodeString(textEng, alphabet)
});

inputMorse.addEventListener('click', function (event) {
  event.preventDefault();
  const morseCode = document.getElementById('morseInput').value;
  document.getElementById('textInput').value = decodeString(morseCode, morse)
});


