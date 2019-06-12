import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import ReactTestRender from 'react-test-renderer';

import Main from '~/pages/Main';
import CategoriesHeader from '~/components/CategoriesHeader';

const mockStore = createStore();

const INITIAL_STATE = {
  products: [
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
      image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omY.jpg',
      price: 69.99,
    },
  ],
  categories: {
    currentId: 3,
  },
};

const store = mockStore(INITIAL_STATE);

let wrapper;

beforeEach(() => {
  wrapper = ReactTestRender.create(
    <Provider store={store}>
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

  describe('Component structure', () => {
    it('Should have one CategoriesHeader instance', () => {
      expect(wrapper.root.findAllByType(CategoriesHeader).length).toEqual(1);
    });
  });
});
