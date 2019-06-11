import React from 'react';
import ReactTestRender from 'react-test-renderer';

import Main from '~/pages/Main';
import CategoriesHeader from '~/components/CategoriesHeader';

let wrapper;

beforeEach(() => {
  wrapper = ReactTestRender.create(<Main />);
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
