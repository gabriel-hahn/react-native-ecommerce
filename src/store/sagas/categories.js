import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import CategoriesActions from '~/store/ducks/categories';
import ErrorActions from '~/store/ducks/error';

export function* loadCategories() {
  const response = yield call(api.get, `/categories`);

  if (response) {
    yield put(CategoriesActions.loadCategoriesSuccess(response.data));
  } else {
    yield put(ErrorActions.setError('Oh, something is wrong now, try again!'));
  }
}
