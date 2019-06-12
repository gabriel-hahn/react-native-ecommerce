import { put } from 'redux-saga/effects';

import CartActions from '~/store/ducks/cart';

export function* addItem({ itemId }) {
  yield put(CartActions.addItem(itemId));
}

export function* removeItem({ itemId }) {
  yield put(CartActions.removeItem(itemId));
}
