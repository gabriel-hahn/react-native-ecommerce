import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import ReactTestRender from 'react-test-renderer';

const mockStore = createStore();

import Product from '~/pages/Product';

const navigationParam = {
  id: 1,
  name: 'Camiseta Hyperas Preta',
  brand: 'Quiksilver',
  image: 'https://t-static.dafiti.com.br/cer-243-1-product.jpg',
  price: 49.99,
  quantity: 2,
};

const navigation = { navigate: jest.fn(), getParam: jest.fn(() => navigationParam) };

let wrapper;

beforeEach(() => {
  wrapper = ReactTestRender.create(
    <Provider store={mockStore({})}>
      <Product navigation={navigation} />
    </Provider>,
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe('Product page', () => {
  describe('Smoke tests', () => {
    it('Should render Product page correctly', () => {
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });

  describe('Page structure', () => {
    it('Should render product details correctly - Image', () => {
      expect(wrapper.root.findAllByType('Image').length).toEqual(1);
    });
  });
});
