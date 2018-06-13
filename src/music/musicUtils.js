// @flow
import MonoSynth from './mixer/MonoSynth'
const monoSynth = new MonoSynth();

const convertKeyCodeToFreq = (keyCode: number): number => {
  // get octaveMultiplier from redux store

  let freq;

  switch (keyCode) {
    case 65:
      freq = 220.00;
      break;
    default:
      freq = 110.00;
  }

  return freq;
}

export const armedInstrument = {
  play: (keyCode: number): void => {
    // convert keyCode to frequency in hz
    const freq = convertKeyCodeToFreq(keyCode);
    console.log(freq, keyCode);

    // Is connected to redux
    // Finds out which instrument is armed, then plays it
    monoSynth.play(freq);
  },

  stop: (keyCode: number): void => {
    // Find armed instrument... (right now just monoSynth)
    monoSynth.stop();
  }
}
