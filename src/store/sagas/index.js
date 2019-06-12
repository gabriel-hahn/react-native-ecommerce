import { all, takeLatest } from 'redux-saga/effects';

import { ProductTypes } from '../ducks/products';
import { CategoryTypes } from '../ducks/categories';

import { setProducts } from './products';
import { setCategories } from './categories';

export default function* rootSaga() {
  yield all([
    takeLatest(CategoryTypes.SET_CATEGORIES_REQUEST, setCategories),
    takeLatest(ProductTypes.SET_PRODUCTS_REQUEST, setProducts),
  ]);
}
