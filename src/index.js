import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Application from './components/Application';

import reducers from './reducers';

const store = createStore(reducers);


render(
  <Provider store={store}>
    <Router>
      <Application />
    </Router>
  </Provider>,
  document.getElementById('root')
);
