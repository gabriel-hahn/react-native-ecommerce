import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  addItem: ['item'],
  removeItem: ['itemId'],
});

export const CartTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  items: [],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM]: (state, { item }) => ({ items: [...state.items, item] }),
  [Types.REMOVE_ITEM]: (state, { itemId }) => ({
    items: [...state.items.filter(item => item.id !== itemId)],
  }),
});
