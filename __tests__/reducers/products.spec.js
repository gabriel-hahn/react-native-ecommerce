import ProductsActions, { reducer } from '~/store/ducks/products';

const INITIAL_STATE = {
  items: [],
  categoryId: 1,
  errorMessage: null,
};

const products = {
  items: [
    {
      id: 1,
      name: 'Camiseta Hyperas Preta',
      brand: 'Quiksilver',
      image: 'https://t-static.dafiti.com.br/cer-243-1-product.jpg',
      price: 49.99,
    }
  ],
  categoryId: 3,
  errorMessage: "Error message test"
};

describe('Products Reducer', () => {
  it('Should be able to set items', () => {
    const state = reducer(INITIAL_STATE, ProductsActions.setProductsSuccess(products.items, products.categoryId));

    expect(state.items).toEqual(products.items);
    expect(state.categoryId).toEqual(products.categoryId);
    expect(state.errorMessage).toBeNull();
  });

  it('Should be able to set a error message', () => {
    const state = reducer(INITIAL_STATE, ProductsActions.setError(products.errorMessage));

    expect(state.errorMessage).toEqual(products.errorMessage);
  });
});
