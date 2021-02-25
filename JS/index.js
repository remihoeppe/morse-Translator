

import {decodeString} from './decode.js';
import {encodeString} from './encode.js';

const inputEng = document.getElementById('btnEngToMorse')
const inputMorse = document.getElementById('btnMorseToEng')

inputEng.addEventListener('click', function (event) {
  event.preventDefault();
  const textEng = document.getElementById('textInput').value;
  document.getElementById('morseInput').value = encodeString(textEng)
});

inputMorse.addEventListener('click', function (event) {
  event.preventDefault();
  const morseCode = document.getElementById('morseInput').value;
  document.getElementById('textInput').value = decodeString(morseCode)
});
