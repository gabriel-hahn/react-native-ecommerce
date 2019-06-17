import React from 'react';

import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

import { Provider } from 'react-redux';
import store from '~/store';

import Routes from '~/routes';

import ErrorMessage from '~/components/ErrorMessage';

const App = () => (
  <Provider store={store}>
    <Routes />
    <ErrorMessage />
  </Provider>
);

export default App;
