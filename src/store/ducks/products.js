import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  setProductsRequest: null,
  setError: ['errorMessage'],
  setCategoryId: ['categoryId'],
  setProductsSuccess: ['items', 'categoryId'],
});

export const ProductTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  items: [],
  categoryId: 1,
  errorMessage: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PRODUCTS_SUCCESS]: (state, { items, categoryId }) => ({
    ...state,
    items,
    categoryId,
    errorMessage: null,
  }),
  [Types.SET_ERROR]: (state, { errorMessage }) => ({ ...state, errorMessage }),
});
