import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  setCategoriesRequest: null,
  setCategoriesSuccess: ['categories'],
  setError: ['errorMessage'],
  setCurrentCategory: ['categoryId'],
});

export const CategoryTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  categories: [],
  currentId: null,
  errorMessage: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CATEGORIES_SUCCESS]: (state, { categories }) => ({
    ...state,
    categories,
    currentId: categories[0].id,
    errorMessage: null,
  }),
  [Types.SET_ERROR]: (state, { errorMessage }) => ({ ...state, errorMessage }),
  [Types.SET_CURRENT_CATEGORY]: (state, { categoryId }) => ({
    ...state,
    currentId: categoryId,
  }),
});
