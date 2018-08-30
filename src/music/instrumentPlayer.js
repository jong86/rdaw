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

    // desired code here:
    // getInstrumentById(instrumentId).play();
  },

  stop: (): void => {
    // Find armed instrument... (right now just monoSynth)
    monoSynth.stop();
  },
}
