import MonoSynth from './instruments/MonoSynth'
const monoSynth = new MonoSynth();

export const armedInstrument = {
  play: (keyCode) => {
    console.log('here')
    // Is connected to redux
    // Finds out which instrument is armed, then plays it
    monoSynth.play();
  },

  stop: (keyCode) => {
    // Find armed instrument... (right now just monoSynth)
    monoSynth.stop();
  }
}