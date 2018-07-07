// @flow
import context from '../audioContext'
import MIDITrack from './MIDITrack'

export default class extends MIDITrack {
  constructor(): void {
    super();
  }

  play(midiNote: number): void {
    const freq = this.convertMIDINoteToFreq(midiNote);

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
    this.modulationGain.connect(this.masterGain.gain);
    this.hfo.connect(this.outputGain);
    this.outputGain.connect(this.masterGain);

    this.lfo.start(currentTime);
    this.hfo.start(currentTime);
  }

  stop(): void {
    const currentTime = context.currentTime;

    this.outputGain.gain.setTargetAtTime(0.0, currentTime, 0.01);
    // this.hfo.stop();
  }
}