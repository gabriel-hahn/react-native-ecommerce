import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import ReactTestRender from 'react-test-renderer';

import ProductsList from '~/components/ProductsList';

const mockStore = createStore();

const INITIAL_STATE = {
  products: {
    items: [
      {
        id: 1,
        name: 'T-shirt',
        image: 'image test',
        brand: 'Brand test',
        price: 35.36,
      },
      {
        id: 2,
        name: 'Shoes',
        image: 'image teste 2',
        brand: 'Brand test 2',
        price: 25.36,
      },
      {
        id: 3,
        name: 'Shoes 2',
        image: 'image teste 3',
        brand: 'Brand test 3',
        price: 125.36,
      },
    ],
    loading: false,
  },
  categories: {
    currentId: 3,
  },
};

const STATE_WITHOUT_ITEMS = {
  products: {
    items: [],
    loading: false,
  },
  categories: {
    currentId: 3,
  },
};

const navigation = { navigate: jest.fn() };

let wrapper;
let wrapperWithoutItems;

beforeEach(() => {
  wrapper = ReactTestRender.create(
    <Provider store={mockStore(INITIAL_STATE)}>
      <ProductsList navigation={navigation} />
    </Provider>,
  );

  wrapperWithoutItems = ReactTestRender.create(
    <Provider store={mockStore(STATE_WITHOUT_ITEMS)}>
      <ProductsList navigation={navigation} />
    </Provider>,
  );
});

describe('ProductsList Component', () => {
  describe('Smoke tests', () => {
    it('Should render ProductsList component correctly', () => {
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });

  describe('Component structure', () => {
    it('Should render 3 items', () => {
      expect(wrapper.root.findAllByType('TouchableOpacity').length).toBe(3);
      expect(wrapper.root.findAllByType('Image').length).toBe(3);
      expect(wrapper.root.findAllByType('Text').length).toBe(9);
    });

    it('Should render no items', () => {
      expect(wrapperWithoutItems.root.findAllByType('TouchableOpacity').length).toBe(0);
    });
  });
});
