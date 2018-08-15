import React from 'react';
import ReactDOM from 'react-dom';
import { Transport } from './Transport';

import { shallow, mount, render } from 'enzyme';

describe('Transport component', () => {
  it('renders without crashing', () => {
    shallow(<Transport classes={{ container: {} }} />);
  });
})