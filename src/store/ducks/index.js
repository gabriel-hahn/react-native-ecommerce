import { combineReducers } from 'redux';

import { reducer as cart } from './cart';
import { reducer as products } from './products';
import { reducer as categories } from './categories';

const reducers = combineReducers({
  cart,
  products,
  categories,
});

export default reducers;
