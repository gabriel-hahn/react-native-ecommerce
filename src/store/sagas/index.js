import { all, takeLatest } from 'redux-saga/effects';

import { ProductTypes } from '../ducks/products';
import { CategoriesTypes } from '../ducks/categories';

import { loadProducts } from './products';
import { loadCategories } from './categories';

export default function* rootSaga() {
  yield all([
    takeLatest(ProductTypes.LOAD_PRODUCTS_REQUEST, loadProducts),
    takeLatest(CategoriesTypes.LOAD_CATEGORIES_REQUEST, loadCategories),
  ]);
}
