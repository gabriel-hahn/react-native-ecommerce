import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import ProductActions from '~/store/ducks/products';
import ErrorActions from '~/store/ducks/error';

export function* loadProducts({ categoryId }) {
  try {
    const response = yield call(api.get, `/category_products/${categoryId}`);
    yield put(ProductActions.loadProductsSuccess(response.data, categoryId));
  } catch (err) {
    yield put(ErrorActions.setError('Oh, something is wrong now, try again!'));
  }  
}
