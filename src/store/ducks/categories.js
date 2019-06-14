import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loadCategoriesRequest: null,
  loadCategoriesSuccess: ['items'],
  setCurrent: ['currentId'],
});

export const CategoriesTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  items: [],
  currentId: 1,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_CATEGORIES_SUCCESS]: (state, { items }) => ({ ...state, items }),
  [Types.SET_CURRENT]: (state, { currentId }) => ({ ...state, currentId }),
});
