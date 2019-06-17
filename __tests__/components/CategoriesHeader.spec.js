import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import ReactTestRender from 'react-test-renderer';

import CategoriesHeader from '~/components/CategoriesHeader';

const mockStore = createStore();

const INITIAL_STATE = {
  categories:  {
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
  }    
};

let wrapper;

beforeEach(() => {
  wrapper = ReactTestRender.create(
    <Provider store={mockStore(INITIAL_STATE)}>
      <CategoriesHeader />
    </Provider>,
  );
});

describe('CategoriesHeader Component', () => {
  describe('Smoke tests', () => {
    it('Should render CategoriesHeader component correctly', () => {
      expect(wrapper.toJSON()).toMatchSnapshot();
    });    
  });

  describe('Component strucuture', () => {
    it('Should render 2 categories', () => {
      expect(wrapper.root.findAllByType('Text').length).toBe(2);
    });
  });
});