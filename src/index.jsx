import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import App from './components/App.jsx';

import keyboardControls from './util/keyboardControls';
keyboardControls();

let root = document.createElement('div');
root.id = "root";
document.body.appendChild( root );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
