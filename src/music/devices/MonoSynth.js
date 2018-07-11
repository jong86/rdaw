// @flow
import context from '../audioContext'
import MIDIDevice from './MIDIDevice'

export default class extends MIDIDevice {
  constructor(): void {
    super();
  }

  play(midiNote: number): void {
    const freq = this.convertMIDINoteToFreq(midiNote);

    if (!this.isPlaying) {
      this.isPlaying = true;


      const currentTime = context.currentTime;

      try {
        this.hfo.stop(currentTime)
      } catch(e) {}

      try {
        this.lfo.stop(currentTime)
      } catch(e) {}

      try {
        this.outputGain.cancelScheduledValues(currentTime)
      } catch(e) {}

      try {
        this.outputGain.gain.setTargetAtTime(0.0, currentTime + 1.0, 1)
      } catch(e) {}


      const env: {
        attack: number,
      } =  {
        attack: 1,
      }

      this.hfo = context.createOscillator();
      this.hfo.frequency.value = freq

      this.lfo = context.createOscillator();
      this.lfo.frequency.value = 5;

      this.modulationGain = context.createGain();
      this.modulationGain.gain.value = 0.1;

      this.outputGain = context.createGain();
      this.outputGain.gain.value = 0.0;
      this.outputGain.gain.setTargetAtTime(1.0, currentTime, env.attack);

      this.lfo.connect(this.modulationGain);
      this.modulationGain.connect(this.preFXGain.gain);
      this.hfo.connect(this.outputGain);
      this.outputGain.connect(this.preFXGain);

      this.lfo.start(currentTime);
      this.hfo.start(currentTime);

    } else if (this.isPlaying && Math.floor(freq) !== Math.floor(this.hfo.frequency.value)) {
      // Just built this to try and catch the initiation of a new note.
      // Might not be necessary (could use an array)

      // console.log('new note played');


    } else {
      // console.log("re-play prevented");
    }
  }

  stop(): void {
    if (this.isPlaying) {
      const currentTime = context.currentTime;

      this.outputGain.gain.setTargetAtTime(0.0, currentTime, 0.01);
      this.hfo.stop();

      this.isPlaying = false;
    }
  }
}