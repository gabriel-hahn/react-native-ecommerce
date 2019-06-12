import { runSaga } from 'redux-saga';

import { addItem, removeItem } from '~/store/sagas/cart';
import CartActions from '~/store/ducks/cart';

const item = {
  id: 1,
  name: "Camiseta Hyperas Preta",
  brand: "Quiksilver",
  image: "https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnPY=/product.jpg",
  price: 49.99
};

let dispatched;

beforeEach(() => {
  dispatched = [];
});

describe('Cart Saga', () => {
  it('Should be able to add one item to the cart', async () => {
    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ cart: { items: [{ id: 3, quantity: 1 }] } }),
      },
      () => addItem(item),
    ).toPromise();

    expect(dispatched[0].type).toEqual(CartActions.addItem().type);
    expect(dispatched[0].item).toEqual(item);
  });

  it('Should be able to increase item quantity if it already exists in the cart', async () => {
    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ cart: { items: [{ id: 1, quantity: 2 }] } }),
      },
      () => addItem(item),
    ).toPromise();

    expect(dispatched[0].type).toEqual(CartActions.increaseItemQuantity().type);
  });

  it('Should be able to remove one item of the cart', async () => {
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      () => removeItem({ itemId: 1 }),
    ).toPromise();

    expect(dispatched[0].type).toEqual(CartActions.removeItem().type);
    expect(dispatched[0].itemId).toEqual(1);
  });
});