import context from '../audioContext';
import Instrument from './Instrument';

export default class extends Instrument {
  constructor() {
    super();
    this.isPlaying = false;
  }

  play(freq) {
    if (!this.isPlaying) {
      this.isPlaying = true;
      const currentTime = context.currentTime;

      this.oscillator = context.createOscillator();
      this.oscillator.connect(context.destination);
      this.oscillator.frequency.setValueAtTime(freq, currentTime);
      this.oscillator.start(currentTime);
    }
  }

  stop() {
    if (this.isPlaying) {
      this.oscillator.stop();
      this.isPlaying = false;
      this.printSomething();
    }
  }
}