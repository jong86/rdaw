// @flow
import context from '../audioContext'
import MIDIDevice from './MIDIDevice'

function createNoiseBuffer() {
  const bufferSize = 2 * context.sampleRate; // Creates noise buffer to use for percussion
  const noiseBuffer = context.createBuffer(1, bufferSize, context.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }
  return noiseBuffer
}

const noiseBuffer = createNoiseBuffer();

export default class extends MIDIDevice {
  constructor(): void {
    super();
  }

  play(midiNote: number): void {
    switch (midiNote) {
      case 60:
        this.kick();
        break;
      case 61:
        this.snare();
        break;
      case 62:
        this.closedHat();
        break;
      case 63:
        this.openHat();
        break;
      default:
        break;
    }
  }

  kick(): void {
    // Kick osc part:
    const osc = context.createOscillator(); // Create oscillator (i.e. 'bass guitar')

    osc.type = "triangle";
    osc.frequency.value = 120;
    osc.frequency.exponentialRampToValueAtTime(40, context.currentTime + 0.1);

    const oscGain = context.createGain(); // Create gain node (i.e. 'gain pedal')
    oscGain.gain.setValueAtTime(0.1, context.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.8, context.currentTime + 0.1);

    osc.connect(oscGain); // Connect osc to gain pedal
    oscGain.connect(context.destination); // Connect gain pedal to speakers (just like a device chain)

    osc.start(); // Generate sound instantly
    osc.stop(context.currentTime + 0.1);

    // Kick noise part:

    const noise = context.createBufferSource();

    noise.buffer = noiseBuffer;
    noise.loop = true;

    const noiseFilter = context.createBiquadFilter();
    noiseFilter.type = "lowpass";

    noiseFilter.frequency.setValueAtTime(1000, context.currentTime);
    noiseFilter.frequency.exponentialRampToValueAtTime(80, context.currentTime + 0.1);

    const noiseGain = context.createGain();
    noiseGain.gain.value = 0.4;

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(context.destination);

    noise.start();
    noise.stop(context.currentTime + 0.1);
  }

  snare(): void {
    // Snare osc part:
    var osc = context.createOscillator(); // Create oscillator (i.e. 'bass guitar')

    osc.type = "triangle";
    osc.frequency.value = 300;
    osc.frequency.exponentialRampToValueAtTime(200, context.currentTime + 0.1);

    var oscGain = context.createGain(); // Create gain node (i.e. 'gain pedal')
    //oscGain.gain.value = 0.5; // set gain node to 30%
    oscGain.gain.setValueAtTime(0.1, context.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.4, context.currentTime + 0.1);

    osc.connect(oscGain); // Connect osc to gain pedal
    oscGain.connect(context.destination); // Connect gain pedal to speakers (just like a device chain)

    osc.start(); // Generate sound instantly
    osc.stop(context.currentTime + 0.07);

    // Snare noise part:
    var noise = context.createBufferSource();

    noise.buffer = noiseBuffer;
    noise.loop = true;

    var noiseFilter = context.createBiquadFilter();
    noiseFilter.type = "lowpass";

    noiseFilter.frequency.setValueAtTime(12000, context.currentTime);
    noiseFilter.frequency.exponentialRampToValueAtTime(220, context.currentTime + 0.1);

    var noiseGain = context.createGain();
    noiseGain.gain.value = 0.2;

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(context.destination);

    noise.start();
    noise.stop(context.currentTime + 0.1);
  }

  closedHat(): void {
    var noise = context.createBufferSource();

    noise.buffer = noiseBuffer;
    noise.loop = true;

    var noiseFilter = context.createBiquadFilter();
    noiseFilter.type = "highpass";

    noiseFilter.frequency.setValueAtTime(1000, context.currentTime);
    noiseFilter.frequency.exponentialRampToValueAtTime(80, context.currentTime + 0.1);

    var noiseGain = context.createGain();
    noiseGain.gain.value = 0.2;

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(context.destination);

    noise.start();
    noise.stop(context.currentTime + 0.03);
  }

  openHat(): void {
    var noise = context.createBufferSource();

    noise.buffer = noiseBuffer;
    noise.loop = true;

    var noiseFilter = context.createBiquadFilter();
    noiseFilter.type = "highpass";

    noiseFilter.frequency.setValueAtTime(1000, context.currentTime);
    noiseFilter.frequency.exponentialRampToValueAtTime(80, context.currentTime + 0.1);

    var noiseGain = context.createGain();
    noiseGain.gain.value = 0.2;
    noiseGain.gain.linearRampToValueAtTime(0, context.currentTime + 0.3);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(context.destination);

    noise.start();
    noise.stop(context.currentTime + 2);
  }


  cymbal(): void {
    var noise = context.createBufferSource();

    noise.buffer = noiseBuffer;
    noise.loop = true;

    var noiseFilter = context.createBiquadFilter();
    noiseFilter.type = "highpass";

    noiseFilter.frequency.setValueAtTime(1000, context.currentTime);
    noiseFilter.frequency.exponentialRampToValueAtTime(80, context.currentTime + 0.1);

    var noiseGain = context.createGain();
    noiseGain.gain.value = 0.2;
    noiseGain.gain.linearRampToValueAtTime(0, context.currentTime + 0.3);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(context.destination);

    noise.start();
    noise.stop(context.currentTime + 0.03);
  }

  cowbell(): void {
    var noise = context.createBufferSource();

    noise.buffer = noiseBuffer;
    noise.loop = true;

    var noiseFilter = context.createBiquadFilter();
    noiseFilter.type = "highpass";

    noiseFilter.frequency.setValueAtTime(1000, context.currentTime);
    noiseFilter.frequency.exponentialRampToValueAtTime(80, context.currentTime + 0.1);

    var noiseGain = context.createGain();
    noiseGain.gain.value = 0.2;
    noiseGain.gain.linearRampToValueAtTime(0, context.currentTime + 0.3);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(context.destination);

    noise.start();
    noise.stop(context.currentTime + 0.03);
  }
}