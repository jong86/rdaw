// @flow
import MonoSynth from './devices/MonoSynth'
const monoSynth = new MonoSynth();

import Drums from './devices/Drums'
const drums = new Drums();


export default {
  play: (midiNum: number, startTime: number): void => {
    // Should be connected to redux -- finds out which instrument is armed, then plays it
    // monoSynth.overdrive().play(midiNum);
    drums.play(midiNum, startTime);

    // Desired code below:
    // getInstrumentById(instrumentId).play();
  },

  stop: (): void => {
    // This is just for testing stuff out:
    monoSynth.stop();
  },
}
