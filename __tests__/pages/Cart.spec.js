import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import ReactTestRender from 'react-test-renderer';

import Cart from '~/pages/Cart';

const mockStore = createStore();

const INITIAL_STATE = {
  cart: {
    items: [
      {
        id: 1,
        name: 'Camiseta Hyperas Preta',
        brand: 'Quiksilver',
        image: 'https://t-static.dafiti.com.br/cer-243-1-product.jpg',
        price: 49.99,
        quantity: 2,
      },
    ],
  },
};

const EMPTY_STATE = {
  cart: {
    items: [],
  }
}

let wrapper;
let wrapperEmpty;

beforeEach(() => {
  wrapper = ReactTestRender.create(
    <Provider store={mockStore(INITIAL_STATE)}>
      <Cart />
    </Provider>,
  );

  wrapperEmpty = ReactTestRender.create(
    <Provider store={mockStore(EMPTY_STATE)}>
      <Cart />
    </Provider>,
  );
});

afterEach(() => {
  wrapper.unmount();
  wrapperEmpty.unmount();
});

describe('Cart page', () => {
  describe('Smoke tests', () => {
    it('Should render Cart page correctly', () => {
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });

  describe('Page structure', () => {
    it('Should render empty cart message when items array is empty', () => {
      expect(wrapperEmpty.root.findAllByType('Text')[0].props.children).toEqual('There are no products in the cart.');
    });

    it('Should render products when items prop is not empty - Brand', () => {
      expect(wrapper.root.findAllByType('Text')[1].props.children).toEqual('Quiksilver');
    });
  });
});
