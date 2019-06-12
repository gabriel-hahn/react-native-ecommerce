import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  setProductsRequest: null,
  setError: ['errorMessage'],
  setCategoryId: ['categoryId'],
  setProductsSuccess: ['products', 'categoryId'],
});

export const ProductTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  products: [],
  categoryId: 1,
  errorMessage: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PRODUCTS_SUCCESS]: (state, { products, categoryId }) => ({
    ...state,
    products,
    categoryId,
    errorMessage: null,
  }),
  [Types.SET_ERROR]: (state, { errorMessage }) => ({ ...state, errorMessage }),
  [Types.SET_CATEGORY_ID]: (state, { categoryId }) => ({ ...state, categoryId }),
});
