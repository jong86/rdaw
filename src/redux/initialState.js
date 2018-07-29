// @flow
import type { appState } from '../definitions/state.js.flow';

const initialState: appState = {
  gui: {
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

  global: {
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
      type: 'MIDI',
      instrument: 'DRUMS',
      isArmed: true,
      timeline: [],
    }]
  },
}

export default initialState;
