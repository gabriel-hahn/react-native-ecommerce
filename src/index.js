import React from 'react';

import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
