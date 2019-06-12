import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import CategoryActions from '~/store/ducks/categories';

export function* setCategories() {
  const response = yield call(api.get, '/categories');

  if (response) {
    yield put(CategoryActions.setCategoriesSuccess(response.data));
  } else {
    yield put(CategoryActions.setError('Oh, something is wrong now, try again!'));
  }
}

export function* setCurrentCategory({ categoryId }) {
  yield put(CategoryActions.setCurrentCategory(categoryId));
}
