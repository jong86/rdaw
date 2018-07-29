// @flow
import type { appState } from '../defs/defs.js.flow';

const initialState: appState = {
  global: {
    view: {
      zoom: 1.0,
      left: 0.0,
    },
    theme: {
      borderRadius: 4,
      paddingSm: [6, 4],
      paddingMd: [12, 8],
      paddingLg: [16, 10],
    },
    DeviceBar: {
      height: 192,
    },
    TitleBar: {
      height: 22,
    }
  },

  project: {
    title: '',
    tempo: 140,
    timeSignature: {
      numerator: 4,
      denominator: 4,
    },
    swing: 0.0,
  },

  tracks: {
    list: [{
      id: 0,
      name: 'Drums',
      type: 'MIDI',
      instrument: 'DRUMS',
      isArmed: true,
      timeline: [],
      gui: {
        height: 100,
        sequencerHeight: null,
        optionsWidth: 128,
      }
    }]
  },
}

export default initialState;
