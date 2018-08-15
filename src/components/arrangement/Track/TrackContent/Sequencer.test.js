import React from 'react';
import ReactDOM from 'react-dom';
import { Sequencer } from './Sequencer';
import { shallow, mount, render } from 'enzyme';

describe('Sequencer component', () => {
  let props, mockEvent;

  beforeEach(() => {
    props = {
      createNote: jest.fn(),
      numNotes: 16,
      intrument: "DRUMS"
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