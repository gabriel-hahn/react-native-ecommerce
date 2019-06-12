import { combineReducers } from 'redux';

import { reducer as cart } from './cart';
import { reducer as products } from './products';

const reducers = combineReducers({
  cart,
  products,
});

export default reducers;
