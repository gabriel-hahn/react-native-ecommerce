import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import ReactTestRender from 'react-test-renderer';

import CategoriesHeader from '~/components/CategoriesHeader';

const mockStore = createStore();

const INITIAL_STATE = {
  products:  {
    categoryId: 3
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
  /*describe('Smoke tests', () => {
    // expect(wrapper.toJSON()).toMatchSnapshot();
  });*/

  describe('Component strucuture', () => {
    it('Should render 4 categories', () => {
      expect(wrapper.root.findAllByType('Text').length).toBe(4);
    });
  });
});