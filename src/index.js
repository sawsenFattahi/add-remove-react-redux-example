import React from 'react';
import { render } from 'react-dom';
import ListContainer from './containers/ListContainer';
import {Provider} from 'react-redux';

import { store } from './store';

render(
  <Provider store={store}>
    <ListContainer />
  </Provider>,
  document.getElementById('root')
)
