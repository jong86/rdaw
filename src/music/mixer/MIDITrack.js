import BaseTrack from './BaseTrack'

export default class extends BaseTrack {
  convertMIDINoteToFreq(midiNote): number {
    return 500;
  }
}