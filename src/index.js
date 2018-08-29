import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import App from './components/App.js';
// import { Provider as ProviderMobX } from 'mobx-react';
// import appState from './music/appState';

import keyboardControls from './util/keyboardControls';
keyboardControls();

let root = document.createElement('div');
root.id = "root";
document.body.appendChild(root);

render(
  <Provider store={store}>
    {/* <ProviderMobX store={appState}> */}
      <App />
    {/* </ProviderMobX> */}
  </Provider>,
  document.getElementById('root')
);
