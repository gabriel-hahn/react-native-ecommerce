import { put, select } from 'redux-saga/effects';

import CartActions from '~/store/ducks/cart';

export function* addItem(item) {
  const cart = yield select(state => state.cart);
  const alreadyExistsInCart = cart.items.find(prod => prod.id === item.id);

  if (alreadyExistsInCart) {
    yield put(CartActions.increaseItemQuantity(item.id));
  }
  else {
    yield put(CartActions.addItem(item));
  }
}

export function* removeItem({ itemId }) {
  yield put(CartActions.removeItem(itemId));
}
