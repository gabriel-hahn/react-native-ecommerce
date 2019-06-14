import CartActions, { reducer } from '~/store/ducks/cart';

const INITIAL_STATE = {
  items: [],
};

const previousState = {
  items: [
    { id: 4, title: 'T-shirt test', quantity: 1 },
    { id: 5, title: 'T-shirt test 2', quantity: 1 },
  ],
};

describe('Cart Reducer', () => {
  it('Should be able to add itens to the cart', () => {
    const newItem = { id: 4, title: 'T-shirt test' };
    const newItem2 = { id: 5, title: 'T-shirt test 2' };

    let state = reducer(INITIAL_STATE, CartActions.addItem(newItem));
    state = reducer(state, CartActions.addItem(newItem2));

    expect(state).toEqual(previousState);
  });

  it('Should be able to remove a specific item from cart', () => {
    const state = reducer(previousState, CartActions.removeItem(5));
    expect(state.items).toEqual([{ id: 4, title: 'T-shirt test', quantity: 1 }]);
  });

  it('Should be able to change quantity of a item from cart', () => {
    const state = reducer(previousState, CartActions.changeItemQuantity(5, 12));
    expect(state.items[1].quantity).toEqual(12);
  });
});
