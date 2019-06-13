import { combineReducers } from 'redux';

import { reducer as cart } from './cart';
import { reducer as products } from './products';
import { reducer as categories } from './categories';
import { reducer as error } from './error';

const reducers = combineReducers({
  cart,
  products,
  categories,
  error,
});

export default reducers;
