import CategoriesActions, { reducer } from '~/store/ducks/categories';

const INITIAL_STATE = {
  items: [],
  currentId: 1,
};

const categories = {
  items: [
    {
      id: 1,
      title: 'T-shirt'
    },
    {
      id: 2,
      title: 'Shoes'
    }
  ],
  currentId: 2,
};

describe('Categories Reducer', () => {
  it('Should be able load all categories', () => {
    const state = reducer(INITIAL_STATE, CategoriesActions.loadCategoriesSuccess(categories.items));

    expect(state.items).toEqual(categories.items);
  });

  it('Should be able to set current categories', () => {
    const state = reducer(INITIAL_STATE, CategoriesActions.setCurrent(1));

    expect(state.currentId).toEqual(1);
  });
});
