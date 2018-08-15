import React from 'react';
import ReactDOM from 'react-dom';
import Sequencer from './Sequencer';

import { shallow, mount, render } from 'enzyme';

describe('Sequencer component', () => {
  it('renders without crashing', () => {
    shallow(<Sequencer />);
  });

  it('creates a note in state when clicked', () => {
    shallow(<Sequencer />);
  });

  it('creates a note at correct indexes when clicked', () => {
    shallow(<Sequencer />);
  });

  it('visually displays a note component when clicked', () => {
    shallow(<Sequencer />);
  });
})