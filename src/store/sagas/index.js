import { all, takeLatest } from 'redux-saga/effects';

import { ProductTypes } from '../ducks/products';
import { CategoriesTypes } from '../ducks/categories';

import { loadProducts } from './products';
import { loadCategories } from './categories';

export default function* rootSaga() {
  yield all([
    takeLatest(ProductTypes.SET_PRODUCTS_REQUEST, loadProducts),
    takeLatest(ProductTypes.SET_CATEGORIES_REQUEST, loadCategories),
  ]);
}
