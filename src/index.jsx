import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

import keyboardControls from './util/keyboardControls';
keyboardControls();

let root = document.createElement('div');
root.id = "root";
document.body.appendChild( root );

render( <App />, document.getElementById('root') );
