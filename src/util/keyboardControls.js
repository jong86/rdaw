// @flow
import instrumentPlayer from '../music/instrumentPlayer';


const convertKeyCodeToMIDINote = (keyCode: number): number => {
  /* Converts javascript keycodes to midi note numbers,
    for bottom two rows of keyboard starting at 'z' */

  let midiNum: number;

  switch (keyCode) {
    case 90:
      midiNum = 60;
      break;
    case 83:
      midiNum = 61;
      break;
    case 88:
      midiNum = 62;
      break;
    case 68:
      midiNum = 63;
      break;
    case 67:
      midiNum = 64;
      break;
    case 86:
      midiNum = 65;
      break;
    case 67:
      midiNum = 66;
      break;
    case 71:
      midiNum = 67;
      break;
    case 66:
      midiNum = 68;
      break;
    case 72:
      midiNum = 69;
      break;
    case 78:
      midiNum = 70;
      break;
    case 74:
      midiNum = 71;
      break;
    case 77:
      midiNum = 72;
      break;
    default:
      midiNum = -1;
      break;
  }

  return midiNum;
}


export default () => {
  return (
    window.addEventListener('keydown', event => {
      const { keyCode } = event;
      const midiNum = convertKeyCodeToMIDINote(keyCode);

      if (keyCode >= 65 && keyCode <= 90) {
        return instrumentPlayer.play(midiNum, 0);
      }
    }),

    window.addEventListener('keyup', event => {
      const { keyCode } = event;

      if (keyCode >= 65 && keyCode <= 90) {
        return instrumentPlayer.stop();
      }
    })
  )
}