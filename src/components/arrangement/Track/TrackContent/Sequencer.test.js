import React from 'react';
import ReactDOM from 'react-dom';
import { Sequencer } from './Sequencer';
import { shallow, mount, render } from 'enzyme';

describe('Sequencer component', () => {
  let props, mockEvent;

  beforeEach(() => {
    props = {
      createNote: jest.fn(),
      containerWidth: 800,
      containerHeight: 600,
      numNotes: 16,
      instrument: "DRUMS",
      trackIndex: 0,
      view: {
        zoom: 1.0,
        left: 0.0,
      },
      grid: {
        numerator: 1,
        denominator: 4,
      },
      barWidth: 32,
    }

    mockEvent = {
      evt: {
        offsetX: 1024,
        offsetY: 5,
      }
    }
  })

  it('renders without crashing', () => {
    shallow(<Sequencer { ...props }/>);
  });

  it('calls createNote function when clicked', () => {
    const node = shallow(<Sequencer { ...props }/>);
    node.simulate('click', mockEvent)
    expect(props.createNote.mock.calls.length).toBe(1)
  });

  // it('visually displays a note component when clicked', () => {
  //   shallow(<Sequencer />);
  // });
})