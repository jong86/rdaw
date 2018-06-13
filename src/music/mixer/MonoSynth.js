// @flow
import context from '../audioContext'
import MIDITrack from './MIDITrack'

export default class extends MIDITrack {
  constructor(): void {
    super();
    this.isPlaying = false;
  }

  play(freq: number): void {
    if (!this.isPlaying) {
      this.isPlaying = true;
      const currentTime = context.currentTime;

      this.oscillator = context.createOscillator();
      this.oscillator.connect(this.masterGain);
      this.oscillator.frequency.setValueAtTime(freq, currentTime);
      this.oscillator.start(currentTime);
    }
  }

  stop(): void {
    if (this.isPlaying) {
      this.oscillator.stop();
      this.isPlaying = false;
    }
  }
}