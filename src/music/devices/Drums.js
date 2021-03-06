// @flow
import audioContext from '../audioContext'
import MIDIDevice from './MIDIDevice'

let lastNoteTime = 0;

function createNoiseBuffer() {
  const bufferSize = 2 * audioContext.sampleRate; // Creates noise buffer to use for percussion
  const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }
  return noiseBuffer
}

const noiseBuffer = createNoiseBuffer();

export default class extends MIDIDevice {
  startTime: number

  play(midiNum: number, startTime: number): void {
    this.startTime = startTime || audioContext.currentTime;

    switch (midiNum) {
      case 21:
        this.kick();
        break;
      case 22:
        this.snare();
        break;
      case 23:
        this.closedHat();
        break;
      case 24:
        this.openHat();
        break;
      default:
        break;
    }
  }

  kick(): void {
    const { startTime } = this;

    // Kick osc part:
    const osc = audioContext.createOscillator(); // Create oscillator (i.e. 'bass guitar')

    osc.type = "triangle";
    osc.frequency.value = 120;
    osc.frequency.exponentialRampToValueAtTime(40, startTime);

    const oscGain = audioContext.createGain(); // Create gain node (i.e. 'gain pedal')
    oscGain.gain.setValueAtTime(0.1, startTime);
    oscGain.gain.exponentialRampToValueAtTime(0.8, startTime + 0.1);

    osc.connect(oscGain); // Connect osc to gain pedal
    oscGain.connect(audioContext.destination); // Connect gain pedal to speakers (just like a device chain)

    osc.start(startTime); // Generate sound instantly
    osc.stop(startTime);

    // Kick noise part:

    const noise = audioContext.createBufferSource();

    noise.buffer = noiseBuffer;
    noise.loop = true;

    const noiseFilter = audioContext.createBiquadFilter();
    noiseFilter.type = "lowpass";

    noiseFilter.frequency.setValueAtTime(1000, startTime);
    noiseFilter.frequency.exponentialRampToValueAtTime(80, startTime + 0.1);

    const noiseGain = audioContext.createGain();
    noiseGain.gain.value = 0.4;

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioContext.destination);

    noise.start(startTime);
    noise.stop(startTime + 0.1);
  }

  snare(): void {
    const { startTime } = this;

    // Snare osc part:
    var osc = audioContext.createOscillator(); // Create oscillator (i.e. 'bass guitar')

    osc.type = "triangle";
    osc.frequency.value = 300;
    osc.frequency.exponentialRampToValueAtTime(200, startTime + 0.1);

    var oscGain = audioContext.createGain(); // Create gain node (i.e. 'gain pedal')
    //oscGain.gain.value = 0.5; // set gain node to 30%
    oscGain.gain.setValueAtTime(0.1, 0);
    oscGain.gain.exponentialRampToValueAtTime(0.4, startTime  + 0.1);

    osc.connect(oscGain); // Connect osc to gain pedal
    oscGain.connect(audioContext.destination); // Connect gain pedal to speakers (just like a device chain)

    osc.start(startTime); // Generate sound instantly
    osc.stop(startTime + 0.07);

    // Snare noise part:
    var noise = audioContext.createBufferSource();

    noise.buffer = noiseBuffer;
    noise.loop = true;

    var noiseFilter = audioContext.createBiquadFilter();
    noiseFilter.type = "lowpass";

    noiseFilter.frequency.setValueAtTime(12000, startTime);
    noiseFilter.frequency.exponentialRampToValueAtTime(220, startTime + 0.1);

    var noiseGain = audioContext.createGain();
    noiseGain.gain.value = 0.2;

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioContext.destination);

    noise.start(startTime);
    noise.stop(startTime + 0.1);
  }

  closedHat(): void {
    const { startTime } = this;

    var noise = audioContext.createBufferSource();

    noise.buffer = noiseBuffer;
    noise.loop = true;

    var noiseFilter = audioContext.createBiquadFilter();
    noiseFilter.type = "highpass";

    noiseFilter.frequency.setValueAtTime(1000, startTime);
    noiseFilter.frequency.exponentialRampToValueAtTime(80, startTime + 0.1);

    var noiseGain = audioContext.createGain();
    noiseGain.gain.value = 0.2;

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioContext.destination);

    noise.start(startTime);
    noise.stop(startTime + 0.03);
  }

  openHat(): void {
    const { startTime } = this;

    var noise = audioContext.createBufferSource();

    noise.buffer = noiseBuffer;
    noise.loop = true;

    var noiseFilter = audioContext.createBiquadFilter();
    noiseFilter.type = "highpass";

    noiseFilter.frequency.setValueAtTime(1000, startTime);
    noiseFilter.frequency.exponentialRampToValueAtTime(80, startTime + 0.1);

    var noiseGain = audioContext.createGain();
    noiseGain.gain.value = 0.2;
    noiseGain.gain.linearRampToValueAtTime(0, startTime + 0.3);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioContext.destination);

    noise.start(startTime);
    noise.stop(startTime + 2);
  }


  cymbal(): void {
    const { startTime } = this;

    var noise = audioContext.createBufferSource();

    noise.buffer = noiseBuffer;
    noise.loop = true;

    var noiseFilter = audioContext.createBiquadFilter();
    noiseFilter.type = "highpass";

    noiseFilter.frequency.setValueAtTime(1000, startTime);
    noiseFilter.frequency.exponentialRampToValueAtTime(80, startTime + 0.1);

    var noiseGain = audioContext.createGain();
    noiseGain.gain.value = 0.2;
    noiseGain.gain.linearRampToValueAtTime(0, startTime + 0.3);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioContext.destination);

    noise.start(startTime);
    noise.stop(startTime + 0.03);
  }

  cowbell(): void {
    const { startTime } = this;

    var noise = audioContext.createBufferSource();

    noise.buffer = noiseBuffer;
    noise.loop = true;

    var noiseFilter = audioContext.createBiquadFilter();
    noiseFilter.type = "highpass";

    noiseFilter.frequency.setValueAtTime(1000, startTime);
    noiseFilter.frequency.exponentialRampToValueAtTime(80, startTime + 0.1);

    var noiseGain = audioContext.createGain();
    noiseGain.gain.value = 0.2;
    noiseGain.gain.linearRampToValueAtTime(0, startTime + 0.3);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioContext.destination);

    noise.start(startTime);
    noise.stop(startTime + 0.03);
  }
}