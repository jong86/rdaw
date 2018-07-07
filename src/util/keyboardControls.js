// @flow
import instrumentPlayer from '../music/instrumentPlayer';


const convertKeyCodeToMIDINote = (keyCode: number): number => {
  let midiNote: number;

  switch (keyCode) {
    case 65:
      midiNote = 60; // midi note numbers
      break;
    default:
      midiNote = 60;
      break;
  }

  return midiNote;
}


const getArmedInstrumentId = (): number => {
  return 1;
}


export default () => {
  return (
    window.addEventListener('keydown', event => {
      const { keyCode } = event;
      const midiNote = convertKeyCodeToMIDINote(keyCode);

      if (keyCode >= 65 && keyCode <= 90) {
        return instrumentPlayer.play(midiNote, 1);
      }
    }),

    window.addEventListener('keyup', event => {
      const { keyCode } = event;

      if (keyCode >= 65 && keyCode <= 90) {
        // return instrumentPlayer.stop(keyCode);
      }
    })
  )
}