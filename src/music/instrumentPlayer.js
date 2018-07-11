// @flow
import MonoSynth from './devices/MonoSynth'
const monoSynth = new MonoSynth();


export default {
  play: (midiNote: number, instrumentId: number): void => {
    // convert keyCode to frequency in hz
    // Is connected to redux
    // Finds out which instrument is armed, then plays it
    monoSynth.overdrive().play(midiNote);

    // desired code:
    // getInstrumentById(instrumentId).play();
  },

  stop: (): void => {
    // Find armed instrument... (right now just monoSynth)
    monoSynth.stop();
  }
}
