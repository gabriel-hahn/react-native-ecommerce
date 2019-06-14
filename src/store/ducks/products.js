import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loadProductsRequest: ['categoryId'],
  loadProductsSuccess: ['items'],
});

export const ProductTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  items: [],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PRODUCTS_SUCCESS]: (state, { items }) => ({ items }),
});
