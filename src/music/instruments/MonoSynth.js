import context from '../audioContext';

export default class {
  constructor() {
    this.isPlaying = false;
  }

  play() {
    if (!this.isPlaying) {
      this.isPlaying = true;

      this.oscillator = context.createOscillator();
      this.oscillator.connect(context.destination);

      const currentTime = context.currentTime;
      this.oscillator.start(currentTime);
    }
  }

  stop() {
    if (this.isPlaying) {
      this.oscillator.stop();
      this.isPlaying = false;
    }
  }
}