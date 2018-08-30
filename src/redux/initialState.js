// @flow
import type { appState } from '../defs/defs.js.flow';

const initialState: appState = {
  global: {
    gui: {
      optionsWidth: 128,
    },
    DeviceBar: {
      height: 192,
    },
    TitleBar: {
      height: 22,
    },
    Transport: {
      height: 48,
    },
    constants: {
      numNotes: {
        DRUMS: 16,
        SYNTH: 127,
      },
      FRAMES_PER_BAR: 4096,
      SCHEDULER_LOOKAHEAD: 0.15, // time in seconds
    },
  },

  project: {
    title: '',

    bpm: 170,
    timeSignature: {
      numerator: 4,
      denominator: 4,
    },
    swing: 0.0,
    swingNote: {
      numerator: 1,
      denominator: 8,
    },

    isPlaying: false,
    isRecording: false,
    isLoopEnabled: false,

    playheadAnimation: {
      from: 0,
      to: 0,
      duration: 0,
    },

    barNum: 0,
    barWidth: 128,

    view: {
      zoom: 1.0,
      left: 0.0,
    },

    grid: {
      numerator: 1, // max 8
      denominator: 4, // max 1024
    },

    length: 0,
  },

  tracks: [{
    id: 0,
    name: 'Drums',
    type: 'MIDI',
    instrument: 'DRUMS',
    isArmed: true,
    timeline: [],
    gui: {
      height: 192,
    }
  }],
}

export default initialState;
