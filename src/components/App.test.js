import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { shallow, mount, render } from 'enzyme';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App classes={{ container: {} }} />);
  });
})