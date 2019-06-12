import { all, takeLatest } from 'redux-saga/effects';

import { ProductTypes } from '../ducks/products';

import { setProducts, setCategoryId } from './products';

export default function* rootSaga() {
  yield all([
    takeLatest(ProductTypes.SET_PRODUCTS_REQUEST, setProducts),
    takeLatest(ProductTypes.SET_CATEGORY_ID, setCategoryId),
  ]);
}
