import React from 'react';
import { shallow } from 'enzyme';

import Main from '~/pages/Main';

import CategoriesHeader from '~/components/CategoriesHeader';
import ProductsList from '~/components/ProductsList';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Main />);
});

describe('Main page', () => {
  describe('Smoke tests', () => {
    it('Should has one CategoriesHeader instance', () => {
      expect(wrapper.find(CategoriesHeader).length).toEqual(1);
    });

    it('Should has one ProductsList instance', () => {
      expect(wrapper.find(ProductsList).length).toEqual(1);
    });
  });
});
