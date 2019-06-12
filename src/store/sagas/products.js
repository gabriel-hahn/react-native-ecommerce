import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import ProductActions from '~/store/ducks/products';

export function* setProducts() {
  const currentId = yield select(state => state.categories.currentId);
  const response = yield call(api.get, `/category_products/${currentId || 1}`);

  if (response) {
    yield put(ProductActions.setProductsSuccess(response.data));
  } else {
    yield put(ProductActions.setError('Oh, something is wrong now, try again!'));
  }
}
