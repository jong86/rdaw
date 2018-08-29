// @flow
import instrumentPlayer from '../music/instrumentPlayer';


const convertKeyCodeToMIDINote = (keyCode: number): number => {
  /* Converts javascript keycodes to midi note numbers,
    for bottom two rows of keyboard starting at 'z' */

  let midiNote: number;

  switch (keyCode) {
    case 90:
      midiNote = 60;
      break;
    case 83:
      midiNote = 61;
      break;
    case 88:
      midiNote = 62;
      break;
    case 68:
      midiNote = 63;
      break;
    case 67:
      midiNote = 64;
      break;
    case 86:
      midiNote = 65;
      break;
    case 67:
      midiNote = 66;
      break;
    case 71:
      midiNote = 67;
      break;
    case 66:
      midiNote = 68;
      break;
    case 72:
      midiNote = 69;
      break;
    case 78:
      midiNote = 70;
      break;
    case 74:
      midiNote = 71;
      break;
    case 77:
      midiNote = 72;
      break;
    default:
      midiNote = -1;
      break;
  }

  return midiNote;
}


export default () => {
  return (
    window.addEventListener('keydown', event => {
      const { keyCode } = event;
      const midiNote = convertKeyCodeToMIDINote(keyCode);

      if (keyCode >= 65 && keyCode <= 90) {
        return instrumentPlayer.play(midiNote);
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