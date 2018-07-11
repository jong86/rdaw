import BaseDevice from './BaseDevice'

const tuning = 440;

const freq = (function midiFreq(tuning, midi) {
  tuning = tuning || 440
  if (arguments.length > 1) return freq(tuning)(midi)

  return function (m) {
    return m === 0 || (m > 0 && m < 128) ? Math.pow(2, (m - 69) / 12) * tuning : null
  }
})(tuning)


export default class extends BaseDevice {
  convertMIDINoteToFreq(midiNote): number {
    return freq(midiNote);
  }
}