import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

import './index.scss';

let data = {
  version: 0
};

window.updateData = json => {
  // create and dispatch the event
  const event = new CustomEvent('updateMainData', {
    data: JSON.parse(json)
  });
  document.dispatchEvent(event);
  console.log('updateMainData event');
};

ReactDOM.render(
  <App data={data}/>,
  document.getElementById('root')
);
