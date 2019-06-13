import ProductsActions, { reducer } from '~/store/ducks/products';

const INITIAL_STATE = {
  items: [],
};

const products = {
  items: [
    {
      id: 1,
      name: 'Camiseta Hyperas Preta',
      brand: 'Quiksilver',
      image: 'https://t-static.dafiti.com.br/cer-243-1-product.jpg',
      price: 49.99,
    },
    {
      id: 2,
      name: 'Camiseta Hyperas Preta 2',
      brand: 'Quiksilver 2',
      image: 'https://t-static.dafiti.com.br/cer-243-1-p2oduct.jpg',
      price: 89.99,
    },
  ],
};

describe('Products Reducer', () => {
  it('Should be able load all products', () => {
    const state = reducer(INITIAL_STATE, ProductsActions.loadProductsSuccess(products.items));

    expect(state.items).toEqual(products.items);
  });
});
