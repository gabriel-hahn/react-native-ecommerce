import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import ReactTestRender from 'react-test-renderer';

import Main from '~/pages/Main';

const mockStore = createStore();

const INITIAL_STATE = {
  products: {
    items: [
      {
        id: 1,
        name: 'Camiseta Hyperas Preta',
        brand: 'Quiksilver',
        image: 'https://t-static.dafiti.com.br/cer-243-1-product.jpg',
        price: 49.99,
      },
    ],
    categoryId: 3,
    errorMessage: null,
  },
};

let wrapper;

beforeEach(() => {
  wrapper = ReactTestRender.create(
    <Provider store={mockStore(INITIAL_STATE)}>
      <Main />
    </Provider>,
  );
});

describe('Main page', () => {
  describe('Smoke tests', () => {
    it('Should render Main page correctly', () => {
      // expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });
});
